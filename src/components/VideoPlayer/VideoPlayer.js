import "./VideoPlayer.scss";

function VideoPlayer(props) {
  return (
		<div>
			<video className="video-poster" poster={props.image}></video>
		</div>
	);
}

export default VideoPlayer;