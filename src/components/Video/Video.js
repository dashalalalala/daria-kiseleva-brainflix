import "./Video.scss";

function Video(props) {
	const clickHandler = () => {
		props.mainVideoProp(props.id);
	};
	return (
		<div className="video" id={props.id} onClick={clickHandler}>
			<div>
				<video className="video__thumbnail" poster={props.image}></video>
			</div>
			<div className="video__details">
				<h3 className="video__title">{props.title}</h3>
				<p className="video__channel">{props.channel}</p>
			</div>
		</div>
	);
}

export default Video;
