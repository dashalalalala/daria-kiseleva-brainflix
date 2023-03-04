import "./VideoPlayer.scss";

function VideoPlayer({mainVideo}) {

	return (
		<div className="player">
			{mainVideo && (
				<video
					className="player__poster"
					poster={mainVideo.image}
					controls
				></video>
			)}
		</div>
	);
}

export default VideoPlayer;
