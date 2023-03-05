import "./VideoUpload.scss";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/icons/publish.svg";

function VideoUpload() {
	const navigate = useNavigate();
	const inputRef = useRef(null);
	const nameRef = useRef(null);

	//Successful Upload
	const handlePublish = (e) => {
		e.preventDefault();

		if (nameRef.current.value.length <= 0) {
			alert("You must provide a title");
			return false;
		}
		if (inputRef.current.value.length < 15) {
			alert("Your description must be 15 minimum characters");
			return false;
		}
		alert("Thank you for your submission!");
		navigate("/");
	};

	//Cancel Upload
	function handleCancel() {
		alert("Submission has been cancelled");
		navigate("/");
	}

	return (
		<>
			<div className="divider"></div>
			<form className="upload">
				<h2 className="upload__header">Upload Video</h2>
				<div className="upload__details">
					<div className="thumbnail-section">
						<p className="upload__subheader">VIDEO THUMBNAIL</p>
						<img
							className="upload__thumbnail"
							src={thumbnail}
							alt="thumbnail"
						></img>
					</div>
					<div className="form-section">
						<div>
							<p className="upload__subheader">TITLE YOUR VIDEO</p>
							<input
								className="upload__input--title"
								type="text"
								placeholder="Add a title to your video"
								ref={nameRef}
							></input>
						</div>
						<div>
							<p className="upload__subheader">ADD A VIDEO DESCRIPTION</p>
							<textarea
								className="upload__input--description"
								placeholder="Add a description to your video"
								ref={inputRef}
							></textarea>
						</div>
					</div>
				</div>
				<div className="buttons">
					<div>
						<button className="upload__button--publish" onClick={handlePublish}>
							PUBLISH
							<img
								className="button__icon"
								src={uploadIcon}
								alt="upload icon"
							></img>
						</button>
					</div>
					<div>
						<button className="upload__button--cancel" onClick={handleCancel}>
							CANCEL
						</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default VideoUpload;
