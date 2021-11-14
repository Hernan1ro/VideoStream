import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutUser } from "../actions";

const Header = (props) => {
  const { user } = props;
  console.log(user);
  let isLogin = Object.keys(user).length > 0;

  const handleLogout = () => {
    console.log("cerrando sesion...");
    // user = {};
    props.logoutUser({});
    console.log(user, "user despues de cerrar");
  };
  return (
    <header className={`header ${props.bg}`}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {isLogin ? (
            <img src={gravatar(user.email)} alt="userPhoto" />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/register">{isLogin ? "Mi cuenta" : "Registrarse"}</Link>
          </li>
          <li>
            <Link to="/login" onClick={isLogin && handleLogout}>
              {isLogin ? "Cerrar sesión" : "Iniciar sesión"}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
    user: state.user,
  };
};
const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
