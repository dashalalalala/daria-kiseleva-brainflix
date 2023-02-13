import { useEffect, useState } from "react";
import "./Video.scss";

function Video(props) {
	const clickHandler = () => {
		props.mainVideoProp(props.id);
	};

	const [overflow, setOverflow] = useState(props.title);

	useEffect(() => {
		function resizeHandler() {
			if (window.innerWidth <= 415) {
				const words = props.title.split(" ");
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
				setOverflow(props.title);
			}
		}

		window.addEventListener("resize", resizeHandler);
		return () => window.removeEventListener("resize", resizeHandler);
	}, [props.title]);

	return (
		<div className="video" id={props.id} onClick={clickHandler}>
			<div>
				<video className="video__thumbnail" poster={props.image}></video>
			</div>
			<div className="video__details">
				<h3 className="video__title">{overflow}</h3>
				<p className="video__channel">{props.channel}</p>
			</div>
		</div>
	);
}

export default Video;
