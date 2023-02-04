import "./Header.scss";
import logo from "../../assets/images/logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import searchIcon from "../../assets//images//icons/search.svg";
import uploadIcon from "../../assets/images/icons/upload.svg";

function Header() {
	return (
		<>
			<header className="header">
				<div className="header__logo">
					<a href="http://localhost:3000/">
						{" "}
						<img className="logo" src={logo} />
					</a>
				</div>
				<div className="nav">
					<div>
						<img className="nav__search--icon" src={searchIcon}></img>
					</div>
					<input className="nav__search" placeholder="Search" />
					<img className="nav__avatar" src={avatar} alt="male profile" />
				</div>
				<div className="header__button">
					<button className="button">
						UPLOAD<img className="button__icon" src={uploadIcon}></img>
					</button>
				</div>
			</header>
		</>
	);
}

export default Header;
