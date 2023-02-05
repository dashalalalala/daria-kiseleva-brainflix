import "./App.scss";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import videoDetails from "./data/video-details.json";

function App() {
	return (
		<div className="App">
			<Header />
      <VideoPlayer/>
			<VideoList videos={videoDetails} />
		</div>
	);
}

export default App;
