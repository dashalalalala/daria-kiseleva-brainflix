import "./Main.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoDescription from "../VideoDescription/VideoDescription";
import CommentForm from "../CommentForm/CommentForm";
import CommentsList from "../CommentsList/CommentsList";
import VideoList from "../VideoList/VideoList";
import { useState, useEffect } from "react";
import axios from "axios";

//API
const apiKey = "01dc537b-ea56-461e-a1aa-6e5b676f6493";
const apiUrl = "https://project-2-api.herokuapp.com/videos";

const initialState = {
	title: "",
	channel: "",
	timestamp: 0,
	views: 0,
	likes: 0,
	description: "",
	comments: [],
};

const getUrl = (videoId, videos) => {
	if (videoId) {
		return `${apiUrl}/${videoId}?api_key=${apiKey}`;
	}

	if (videos.length) {
		return `${apiUrl}/${videos[0].id}?api_key=${apiKey}`;
	}

	return null;
};

function Main() {
	const [videos, setVideos] = useState([]);
	const [mainVideo, setMainVideo] = useState({});
	const [videoId, setVideoId] = useState(null);
	const [videoProps, setVideoProps] = useState(initialState);

	useEffect(() => {
		axios
			.get(`${apiUrl}/?api_key=${apiKey}`)
			.then((response) => setVideos(response.data));
		// .catch(error) => console.log(error);
	}, []);

	useEffect(() => {
		if (videos.length) {
			const url = getUrl(videoId, videos);

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
	}, [videos, videoId]);

	const changeActiveVideo = (id) => {
		setVideoId(id);
		const selectedVideo = videos.find((video) => video.id === id);
		if (selectedVideo) {
			setMainVideo(selectedVideo);
		}
	};

	if (mainVideo) {
		return (
			<>
				<VideoPlayer mainVideo={mainVideo} />
				<div className="main-div">
					<div className="video=player">
						<VideoDescription mainVideo={videoProps} />
						<CommentForm comments={videoProps.comments} />
						<CommentsList comments={videoProps.comments} />
					</div>
					<VideoList
						videos={videos}
						changeActiveVideo={changeActiveVideo}
						activeVideoId={mainVideo.id}
					/>
				</div>
			</>
		);
	}

	return null;
}

export default Main;
