import "./App.scss";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import CommentForm from "./components/CommentForm/CommentForm";
import CommentsList from "./components/CommentsList/CommentsList";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import { useState } from "react";

function App() {
	const [mainVideo, setMainVideo] = useState(videoDetails[0]);
	const [comments, setComments] = useState(videoDetails[0].comments);
	const [filteredVideos, setFilter] = useState(videos);

	const changeActiveVideo = (id) => {
		const selectedVideo = videoDetails.find((video) => video.id === id);
		setMainVideo(selectedVideo);
		setComments(selectedVideo.comments);
		showFilteredVideos(id);
	};

	const showFilteredVideos = (id) => {
		const newVideoArray = videos.filter((video) => video.id !== id);
		console.log(newVideoArray);
		setFilter(newVideoArray);
	};

	return (
		<div className="App">
			<Header />
			<VideoPlayer videos={mainVideo} />
			<CommentForm />
			<CommentsList comments={comments} />
			<VideoList videos={filteredVideos} mainVideoProp={changeActiveVideo} />
		</div>
	);
}

export default App;
