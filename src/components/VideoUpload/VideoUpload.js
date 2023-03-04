import "./VideoUpload.scss";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/icons/publish.svg";
import { useNavigate } from "react-router-dom";

function VideoUpload() {
	const navigate = useNavigate();
	
	//Successful Upload
	function handlePublish() {
		alert("Thank you for your submission!");
		navigate("/");
		console.log("click");
	}

	//Cancel Upload
		function handleCancel() {
			alert("Submission has been cancelled");
			navigate("/");
			console.log("click");
		}

	return (
		<>
			<div className="divider"></div>
			<form className="upload">
				<h2 className="upload__header">Upload Video</h2>
				<div className="upload__details">
					<div className="thumbnail-section">
						<p className="upload__subheader">VIDEO THUMBNAIL</p>
						<img className="upload__thumbnail" src={thumbnail}></img>
					</div>
					<div className="form-section">
						<div>
							<p className="upload__subheader">TITLE YOUR VIDEO</p>
							<input
								className="upload__input--title"
								type="text"
								placeholder="Add a title to your video"
								required
							></input>
						</div>
						<div>
							<p className="upload__subheader">ADD A VIDEO DESCRIPTION</p>
							<textarea
								className="upload__input--description"
								placeholder="Add a description to your video"
								minLength={15}
								required
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
						<button className="upload__button--cancel" onClick={handleCancel}>CANCEL</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default VideoUpload;
