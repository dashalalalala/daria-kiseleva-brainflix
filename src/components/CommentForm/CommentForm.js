import "./CommentForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";

function CommentForm({ newComments, handleSubmit, comment, setComment }) {
	return (
		<div className="comment-form">
			<p className="comment-form__comments-count">
				{newComments.length} Comments
			</p>
			<div className="form">
				<div>
					<img className="form__avatar" src={avatar} alt="male profile"></img>
				</div>
				<form className="form__section" onSubmit={handleSubmit}>
					<p className="form__title">JOIN THE CONVERSATION</p>
					<div className="form__input">
						<textarea
							className="form__input--field"
							id="input"
							placeholder="Add a new comment"
							minLength={5}
							required
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						></textarea>
						<button className="form__button">
							COMMENT
							<img
								className="form__button--icon"
								src={commentIcon}
								alt="icon"
							></img>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CommentForm;
