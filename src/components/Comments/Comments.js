import "./Comments.scss";
import TimeAgo from "react-timeago";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

function Comments({ date, name, comment }) {
	const unit = "years";
	const suffix = "ago";
	const formatter = buildFormatter(unit, suffix);

	return (
		<div className="comments">
			<div className="comments__avatar">
				<img className="comments__avatar--placeholder" alt=""></img>
			</div>
			<div className="comment">
				<div className="comment__info">
					<p className="comment__info--name">{name}</p>
					<p className="comment__info--date">
						<TimeAgo
							date={date}
							formatter={(formatter.value, formatter.unit)}
						/>
					</p>
				</div>
				<div className="comment__text">
					<p className="comment__text--comment">{comment}</p>
				</div>
			</div>
		</div>
	);
}

export default Comments;
