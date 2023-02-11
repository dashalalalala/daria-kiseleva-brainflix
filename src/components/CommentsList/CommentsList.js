import Comments from "../Comments/Comments";
import "./CommentsList.scss";

function CommentsList(props) {
	return (
		<div className="comments-list">
			{props.comments.map((comment) => (
				<Comments
					key={comment.id}
					date={comment.timestamp}
					name={comment.name}
					comment={comment.comment}
				/>
			))}
		</div>
	);
}
export default CommentsList;
