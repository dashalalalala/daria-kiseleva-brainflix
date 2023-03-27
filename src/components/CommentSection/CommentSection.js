import CommentForm from "../CommentForm/CommentForm";
import CommentsList from "../CommentsList/CommentsList";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../utils";

function CommentSection({ id, comments }) {
	const [name, setName] = useState("");
	const [comment, setComment] = useState("");
	const [newComments, setNewComments] = useState([]);

	//Loading Comments Data
	useEffect(() => {
		if (comments) {
			const sortedComments = comments.sort(
				(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
			);
			setNewComments(sortedComments);
		}
	}, [comments]);

	//Comment Submit Handler
	const handleSubmit = (e) => {
		e.preventDefault();
		addNewComment(name, comment);
	};

	//Post Request for Comments
	const addNewComment = (name, comment, timestamp) => {
		axios
			.post(`${apiUrl}/${id}/comments`, {
				name: "New User",
				comment: comment,
				timestamp: timestamp,
			})
			.then((response) => {
				const newComment = response.data;
				setNewComments((previousComments) => {
					const sortedComments = [...previousComments, newComment].sort(
						(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
					);
					return sortedComments;
				});
			})
			.catch((error) => {
				console.error(error);
			});
		setName("");
		setComment("");
	};

	//Delete Request for Comments
	const deleteComment = (commentId) => {
		axios
			.delete(`${apiUrl}/${id}/comments/${commentId}`)
			.then(() => {
				setNewComments(
					newComments.filter((comment) => comment.id !== commentId)
				);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<>
			<CommentForm
				name={name}
				comment={comment}
				setName={setName}
				setComment={setComment}
				newComments={newComments}
				handleSubmit={handleSubmit}
			/>
			<CommentsList newComments={newComments} deleteComment={deleteComment} />
		</>
	);
}

export default CommentSection;
