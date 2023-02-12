import "./VideoPlayer.scss";

function VideoPlayer(props) {
	return (
		<div className="player">
			<video
				className="player__poster"
				poster={props.videos.image}
				controls
			></video>
		</div>
	);
}

export default VideoPlayer;
