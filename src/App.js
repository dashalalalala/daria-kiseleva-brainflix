import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import VideoUpload from "./pages/VideoUpload/VideoUpload";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/videos" element={<Home />} />
					<Route path="/videos/:id" element={<Home />} />
					<Route path="/upload" element={<VideoUpload />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
