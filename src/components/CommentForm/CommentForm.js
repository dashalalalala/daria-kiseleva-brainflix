import "./CommentForm.scss";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";

function CommentForm(props) {
	return (
		<div className="comment-form">
			<p className="comment-form__comments-count">
				{props.comments.length} Comments
			</p>
			<div className="form">
				<div>
					<img className="form__avatar" src={avatar} alt="male profile"></img>
				</div>
				<form className="form__section">
					<p className="form__title">JOIN THE CONVERSATION</p>
					<div className="form__input">
						<textarea
							className={"form__input--field"}
							id="input"
							placeholder="Add a new comment"
							minLength={5}
							required
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
