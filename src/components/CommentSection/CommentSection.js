import CommentForm from "../CommentForm/CommentForm";
import CommentsList from "../CommentsList/CommentsList";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiKey, apiUrl } from "../../utils";

function CommentSection({ id }) {
	const [name, setName] = useState("New User");
	const [comment, setComment] = useState("");
	const [newComments, setNewComments] = useState([]);

	//Get Request for Comments Data
	useEffect(() => {
		if (id) {
			axios
				.get(`${apiUrl}/${id}?api_key=${apiKey}`)
				.then((response) => {
					const sortedComments = response.data.comments.sort(
						(a, b) => new Date(b.timestamp) - new Date(a.timestamp)
					);
					setNewComments(sortedComments);
				})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [id]);

	//Comment Submit Handler
	const handleSubmit = (e) => {
		e.preventDefault();
		addNewComment(name, comment);
	};

	//Post Request for Comments
	const addNewComment = (name, comment) => {
		axios
			.post(`${apiUrl}/${id}/comments?api_key=${apiKey}`, {
				name: name,
				comment: comment,
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
		setName("New User");
		setComment("");
	};

	//Delete Request for Comments
	const deleteComment = (commentId) => {
		axios
			.delete(`${apiUrl}/${id}/comments/${commentId}?api_key=${apiKey}`)
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
