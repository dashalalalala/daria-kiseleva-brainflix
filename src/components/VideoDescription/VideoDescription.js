import "./VideoDescription.scss";
import Moment from "react-moment";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

function VideoDescription(props) {
	return (
		<div className="main">
			<div className="title">
				<h2 className="title__text">{props.videos.title}</h2>
			</div>
			<div className="info">
				<div className="details">
					<p className="details__channel">By {props.videos.channel}</p>
					<p className="details__date">
						<Moment format="MM/DD/YYYY">{props.videos.timestamp}</Moment>
					</p>
				</div>
				<div className="stats">
					<p className="stats__views">
						<img className="stats__icon" src={viewsIcon} alt="views icon"></img>
						{props.videos.views}
					</p>
					<p className="stats__likes">
						<img className="stats__icon" src={likesIcon} alt="like icon"></img>
						{props.videos.likes}
					</p>
				</div>
			</div>
			<div className="descritpion">
				<p className="description__text">{props.videos.description}</p>
			</div>
		</div>
	);
}

export default VideoDescription;
