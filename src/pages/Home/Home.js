import "./Home.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDescription from "../../components/VideoDescription/VideoDescription";
import VideoList from "../../components/VideoList/VideoList";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../utils";

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
		return `${apiUrl}/${videoId}`;
	}

	if (!videoId) {
		return `${apiUrl}/${videos[0].id}`;
	}
};

function Main() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [videos, setVideos] = useState([]);
	const [mainVideo, setMainVideo] = useState({});
	const [videoProps, setVideoProps] = useState(initialState);

	//Default Video Setup
	useEffect(() => {
		axios
			.get(`${apiUrl}`)
			.then((response) => {
				setVideos(response.data);
				if (!id) {
					navigate(`/videos/${response.data[0].id}`);
				} else {
					const url = getUrl(id);
					axios.get(url).then((defaultVideo) => {
						setMainVideo(defaultVideo.data);
						//can potentially get rid of it
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
			})
			.catch((error) => {
				console.error(error);
			});
	}, [id, navigate]);

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
