import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes } 
from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'; 



function Login() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("");
  const [datosEnviados, setDatosEnviados] = useState(false);

  const EnviarFormulario = (e) => {
    e.preventDefault();
    setDatosEnviados(true);
  }

  const LimpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setEdad("");
    setDatosEnviados(false);
  }

  return (
    <div className="container mt-5">
      <h1>Ingresa Tus Datos</h1>
      <form onSubmit={EnviarFormulario}>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control mb-3"
          placeholder="Ingresa tu nombre completo"
        />
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-3"
          placeholder="Ingresa tu email"
        />
        <input
          id="edad"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          className="form-control mb-3"
          placeholder="Ingresa tu edad"
        />
        <button type="submit" className="btn btn-primary">Enviar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={LimpiarFormulario}>Limpiar</button>
      </form>

      {datosEnviados && (
        <div className="datos-salida mt-4">
          <h2>Datos Ingresados:</h2>
          <p>Nombre: {nombre}</p>
          <p>Email: {email}</p>
          <p>Edad: {edad}</p>
          <br />
          <br />
          <br />
        </div>
      )}
    </div>
  );
}

export default Login;

