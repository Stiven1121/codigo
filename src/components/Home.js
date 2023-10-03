import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import '../hojas_de_estilos/home.css';
import 'animate.css';
import { Fade, Bounce, Flip } from "react-awesome-reveal";
import Icon from '../icon.svg'



function Home(){

	return (

		<div className="container">



			<Flip><h1 className="animate__swing">BIENVENIDOS A LA MEJOR APP DE FUTBOL</h1></Flip>
			<img width="80px" src={Icon} />
			<Bounce><p className="p_home">¡Invita a tus amigos a unirse a esta gran comunidad!</p></Bounce>

		</div>




	);
}

export default Home;