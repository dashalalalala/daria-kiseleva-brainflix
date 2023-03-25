import "./VideoUpload.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import thumbnail from "../../assets/images/Upload-video-preview.jpg";
import uploadIcon from "../../assets/images/icons/publish.svg";
import axios from "axios";
import { apiUrl } from "../../utils";

function VideoUpload() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: "",
		description: "",
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		console.log(formData);
		setFormData({ ...formData, [name]: value });
	};

	//Successful Upload & POST Request
	const handlePublish = (e) => {
		e.preventDefault();
		if (formData.title.length <= 0) {
			alert("You must provide a title");
			return false;
		}
		if (formData.description.length < 15) {
			alert("Your description must be 15 minimum characters");
			return false;
		}
		alert("Thank you for your submission!");
		axios
			.post(apiUrl, formData)
			.then((response) => {
				console.log("response data", response.data);
			})
			.catch((error) => {
				console.error(error);
			});
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
			<form className="upload" onSubmit={handlePublish}>
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
								name="title"
								placeholder="Add a title to your video"
								value={formData.title}
								onChange={handleInputChange}
							></input>
						</div>
						<div>
							<p className="upload__subheader">ADD A VIDEO DESCRIPTION</p>
							<textarea
								className="upload__input--description"
								name="description"
								placeholder="Add a description to your video"
								value={formData.description}
								onChange={handleInputChange}
							></textarea>
						</div>
					</div>
				</div>
				<div className="buttons">
					<div>
						<button
							className="upload__button--publish desktop"
							onClick={handlePublish}
						>
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
