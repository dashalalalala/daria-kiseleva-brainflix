import "./Home.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoList from "../../components/VideoList/VideoList";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { apiKey, apiUrl } from "../../utils";

//Video Initial State Props
const initialState = {
	title: "",
	channel: "",
	timestamp: 0,
	views: 0,
	likes: 0,
	description: "",
	comments: [],
};

//Getting the URL for the load
const getUrl = (videoId, videos) => {
	if (videoId) {
		return `${apiUrl}/${videoId}?api_key=${apiKey}`;
	}

	if (videos.length) {
		return `${apiUrl}/${videos[0].id}?api_key=${apiKey}`;
	}
};

function Main() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [videos, setVideos] = useState([]);
	const [mainVideo, setMainVideo] = useState({});
	const [videoProps, setVideoProps] = useState(initialState);

	//Videos Get Request
	useEffect(() => {
		axios
			.get(`${apiUrl}/?api_key=${apiKey}`)
			.then((response) => setVideos(response.data))
			.catch((error) => {
				console.error(error);
			});
	}, []);

	//Default Video Setup
	useEffect(() => {
		if (videos.length) {
			if (!id) {
				navigate(`/videos/${videos[0].id}`);
			}
			const url = getUrl(id, videos);

			axios.get(url).then((defaultVideo) => {
				setMainVideo(defaultVideo.data);
				setVideoProps({
					title: defaultVideo.data.title,
					channel: defaultVideo.data.channel,
					timestamp: defaultVideo.data.timestamp,
					views: defaultVideo.data.views,
					likes: defaultVideo.data.likes,
					description: defaultVideo.data.description,
					comments: defaultVideo.data.comments,
				});
			});
		}
	}, [videos, id, navigate]);

	if (mainVideo) {
		return (
			<>
				<VideoPlayer mainVideo={mainVideo} />
				<div className="main-div">
					<div className="video-player">
						<VideoDescription mainVideo={videoProps} />
						<CommentSection comments={videoProps.comments} id={id} />
					</div>
					<VideoList videos={videos} activeVideoId={mainVideo.id} />
				</div>
			</>
		);
	}

	return null;
}

export default Main;
