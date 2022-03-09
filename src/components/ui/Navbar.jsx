import "./navbar.css";
import logo from "../../images/logo.jpeg";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo-div">
        <img src={logo} />
        <h1>Just News</h1>
      </div>
    </nav>
  );
};
