import Comments from "../Comments/Comments";
import "./CommentsList.scss";

function CommentsList({comments}) {
	return (
		<div className="comments-list">
			{comments && comments.map((comment) => (
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
