import Video from "../Video/Video";
import "./VideoList.scss";

function VideoList(props) {
	return (
		<div className="video-list">
			<h2 className="video-list__header">NEXT VIDEOS</h2>
			{props.videos.map((video) => (
				<Video
					key={video.id}
					id={video.id}
					title={video.title}
					image={video.image}
					video={video.video}
					channel={video.channel}
					comments={video.comments}
					mainVideoProp={props.mainVideoProp}
				/>
			))}
		</div>
	);
}

export default VideoList;
