import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoUpload from "./components/VideoUpload/VideoUpload";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/videos" element={<Main />} />
					<Route path="/videos/:videoId" element={<Main />} />
					<Route path="/upload" element={<VideoUpload />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
