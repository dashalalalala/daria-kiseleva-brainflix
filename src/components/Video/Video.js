import "./Video.scss"

function Video(props) {
  return (
		<div className="video">
			<div>
				<video className="video__poster" poster={props.image}></video>
			</div>
			<div className="video__details">
				<h3 className="video__title">{props.title}</h3>
				<p className="video__channel">{props.channel}</p>
			</div>
		</div>
	);
}

export default Video;