import Video from "../Video/Video";
import "./VideoList.scss";

function VideoList({ videos, activeVideoId }) {
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
						/>
					))}
		</div>
	);
}

export default VideoList;
