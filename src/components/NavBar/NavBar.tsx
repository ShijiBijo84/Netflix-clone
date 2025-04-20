import "./NavBar.css";
import netFlixLogo from "/netflix-3.svg";
import avatar from "/netflix-avatar.png";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src={netFlixLogo} alt="Netflix logo"></img>
      <img className="avatar" src={avatar} alt="Netflix-avatar"></img>
    </div>
  );
}
export default NavBar;
