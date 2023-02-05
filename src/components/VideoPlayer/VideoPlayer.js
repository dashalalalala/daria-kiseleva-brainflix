import "./VideoPlayer.scss";
import Moment from "react-moment";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

function VideoPlayer(props) {
	return (
		<div className="main">
			<div className="player">
				<video
					className="player__poster"
					poster={props.videos[1].image}
				></video>
				<h2 className="player__title">{props.videos[1].title}</h2>
			</div>
			<div className="info">
				<div className="details">
					<p className="details__channel">By {props.videos[1].channel}</p>
					<p className="details__date">
						<Moment format="MM/DD/YYYY">{props.videos[1].timestamp}</Moment>
					</p>
				</div>
				<div className="stats">
					<p className="stats__views">
						<img className="stats__icon" src={viewsIcon}></img>
						{props.videos[1].views}
					</p>
					<p className="stats__likes">
						<img className="stats__icon" src={likesIcon}></img>
						{props.videos[1].likes}
					</p>
				</div>
			</div>
			<div className="descritpion">
				<p className="description__text">{props.videos[1].description}</p>
			</div>
		</div>
	);
}

export default VideoPlayer;
