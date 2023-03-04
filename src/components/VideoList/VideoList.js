import Video from "../Video/Video";
import "./VideoList.scss";
import { useParams } from "react-router-dom";

function VideoList({ changeActiveVideo, videos, activeVideoId }) {
	return (
		<div className="video-list">
			<h2 className="video-list__header">NEXT VIDEOS</h2>
			{videos &&
				videos
					.filter((video) => {
						return video.id !== activeVideoId;
					})
					.map((video, index) => (
						<Video
							key={video.id}
							id={video.id}
							title={video.title}
							image={video.image}
							channel={video.channel}
							// videos = {props.videos}
							// mainVideoProp={props.mainVideoProp}
							changeActiveVideo={changeActiveVideo}
						/>
					))}
		</div>
	);
}

export default VideoList;
