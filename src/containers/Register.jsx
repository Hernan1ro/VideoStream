import React, { useState } from "react";
import "../assets/styles/Register.scss";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import Header from "../components/Header";

const Register = (props) => {
  let history = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form);
    history("/");
  };
  return (
    <>
      <Header bg="header-background-3" />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              onChange={handleInput}
              className="input"
              type="text"
              placeholder="Nombre"
            />
            <input
              name="email"
              onChange={handleInput}
              className="input"
              type="text"
              placeholder="Correo"
            />
            <input
              name="password"
              onChange={handleInput}
              className="input"
              type="password"
              placeholder="Contraseña"
            />
            <button type="submit" className="button">
              Registrarme
            </button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
