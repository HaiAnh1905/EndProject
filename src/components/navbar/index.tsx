import { VerticalRightOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "../main/style.scss";

const NavBar = () => {
  return (
    <div className="navbar w-full flex items-center justify-around ">
      <div className="logo-branch flex items-center justify-center w-fit ">
        <VerticalRightOutlined style={{ fontSize: "3rem", color: "white" }} />
        <div className="branch-name text-white">KLop</div>
      </div>
      <div className="item flex items-center text-white justify-center w-fit gap-7">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/">Shops</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>
      <div className="login-out text-white text-lg flex items-center justify-center ">
        <NavLink to="">Login</NavLink>
        <NavLink to="">Logout</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
