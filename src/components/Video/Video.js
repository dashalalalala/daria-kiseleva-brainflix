import { useEffect, useState } from "react";
import "./Video.scss";
import { Link, useParams } from "react-router-dom";

function Video({ id, title, image, channel, changeActiveVideo }) {
	const { videoId } = useParams();
	const [overflow, setOverflow] = useState(title);

	useEffect(() => {
		changeActiveVideo(videoId);
	}, [videoId, changeActiveVideo]);

	useEffect(() => {
		function resizeHandler() {
			if (window.innerWidth <= 415) {
				const words = title.split(" ");
				let overflowText = "";
				for (let i = 0; i < words.length; i++) {
					if (overflowText.length + words[i].length <= 40) {
						overflowText = `${overflowText} ${words[i]}`;
					} else {
						overflowText = `${overflowText}...`;
						break;
					}
				}
				setOverflow(overflowText.trim());
			} else if (window.innerWidth >= 416) {
				setOverflow(title);
			}
		}

		window.addEventListener("resize", resizeHandler);
		return () => window.removeEventListener("resize", resizeHandler);
	}, [title]);

	return (
		<Link to={`/videos/${id}`} style={{ textDecoration: "none" }}>
			<div className="video" id={id}>
				<div>
					<video className="video__thumbnail" poster={image}></video>
				</div>
				<div className="video__details">
					<h3 className="video__title">{overflow}</h3>
					<p className="video__channel">{channel}</p>
				</div>
			</div>
		</Link>
	);
}

export default Video;
