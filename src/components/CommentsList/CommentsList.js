import Comments from "../Comments/Comments";
import "./CommentsList.scss";

function CommentsList({ newComments, deleteComment }) {
	return (
		<div className="comments-list">
			{newComments &&
				newComments.map((comment) => (
					<Comments
						key={comment.id}
						id={comment.id}
						date={comment.timestamp}
						name={comment.name}
						comment={comment.comment}
						deleteComment={deleteComment}
					/>
				))}
		</div>
	);
}
export default CommentsList;
