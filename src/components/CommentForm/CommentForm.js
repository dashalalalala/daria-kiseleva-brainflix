import "./CommentForm.scss";
// import { useState } from "react";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/images/icons/add_comment.svg";

function CommentForm(props) {
	return (
		<>
			<p className="comment-count">{props.length} comments</p>
			<div className="form">
				<div>
					<img className="form__avatar" src={avatar} alt="male profile"></img>
				</div>
				<div className="form__section">
					<p className="form__title">JOIN THE CONVERSATION</p>
					<textarea
						className="form__input"
						id="input"
						placeholder="Add a new comment"
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
			</div>
		</>
	);
}

export default CommentForm;
