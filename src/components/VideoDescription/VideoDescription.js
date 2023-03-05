import "./VideoDescription.scss";
import Moment from "react-moment";
import viewsIcon from "../../assets/images/icons/views.svg";
import likesIcon from "../../assets/images/icons/likes.svg";

function VideoDescription({ mainVideo }) {
	return (
		<div className="main">
			<div className="title">
				<h2 className="title__text">{mainVideo.title}</h2>
			</div>
			<div className="info">
				<div className="details">
					<p className="details__channel">By {mainVideo.channel}</p>
					<p className="details__date">
						<Moment format="MM/DD/YYYY">{mainVideo.timestamp}</Moment>
					</p>
				</div>
				<div className="stats">
					<p className="stats__views">
						<img className="stats__icon" src={viewsIcon} alt="views icon"></img>
						{mainVideo.views}
					</p>
					<p className="stats__likes">
						<img className="stats__icon" src={likesIcon} alt="like icon"></img>
						{mainVideo.likes}
					</p>
				</div>
			</div>
			<div className="descritpion">
				<p className="description__text">{mainVideo.description}</p>
			</div>
		</div>
	);
}

export default VideoDescription;
