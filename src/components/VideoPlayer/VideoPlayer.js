import "./VideoPlayer.scss";
import playIcon from "../../assets/images/icons/play.svg";
import fullScreenIcon from "../../assets/images/icons/fullscreen.svg";
import volumeUpIcon from "../../assets/images/icons/volume_up.svg";

function VideoPlayer({ mainVideo }) {
	return (
		<>
			<div className="player">
				<div className="player__controls-container">
					<div className="controls-timeline"></div>
					<div className="controls">
						<button className="play-pause-btn">
							<img className="play-icon" src={playIcon} alt="" />
						</button>
						<div className="duration-container">
							<div className="duration__line"></div>
							<div className="current-time">0:00</div>/
							<div className="total-time">4:22 </div>
						</div>
						<div className="controls__right">
							<button className="fullscreen-btn">
								<img className="open" src={fullScreenIcon} alt="" />
							</button>
							<div className="volume-container">
								<button className="volume-btn">
									<img className="volume" src={volumeUpIcon} alt="" />
								</button>
							</div>
						</div>
					</div>
				</div>
				{mainVideo && (
					<video
						className="player__poster"
						poster={mainVideo.image}
						src={mainVideo.video}
						type="video/mp4"
					></video>
				)}
			</div>
		</>
	);
}

export default VideoPlayer;
