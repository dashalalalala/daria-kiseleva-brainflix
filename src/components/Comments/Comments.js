import "./Comments.scss";
import Moment from "react-moment";

function Comments(props) {
	return (
		<div className="comments">
			<div className="comments__avatar">
				<img className="comments__avatar--placeholder" alt=""></img>
			</div>
			<div className="comment">
				<div className="comment__info">
					<p className="comment__info--name">{props.name}</p>
					<p className="comment__info--date">
						<Moment format="MM/DD/YYYY">{props.date}</Moment>
					</p>
				</div>
				<div className="comment__text">
					<p className="comment__text--comment">{props.comment}</p>
				</div>
			</div>
		</div>
	);
}

export default Comments;
