import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes } 
from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'animate.css';
import '../hojas_de_estilos/QuienesSomos.css';





function QuienesSomos(){

	return (

		<div className="container">

			<div>
				<h2>Somos una página hecha para ayudarte a crear una lista de tus jugadores favoritos y compartirlo con los demás</h2>
				  <p>
				    <strong>Destacando la Comunidad:</strong><br/> "En nuestra comunidad, los amantes del fútbol se reúnen para compartir su pasión por el juego y descubrir nuevos talentos juntos."
				  </p>
				  <p>
				    <strong>Facilitando la Organización:</strong><br/> "Te brindamos las herramientas necesarias para organizar y mantener actualizada tu lista de jugadores favoritos de manera sencilla y efectiva."
				  </p>
				  <p>
				    <strong>Fomentando la Interacción:</strong><br/> "Comenta, debate y descubre más sobre los jugadores que admiras. Conéctate con otros aficionados y expande tu conocimiento del mundo del fútbol."
				  </p>
				  <p>
				    <strong>Personalización y Creatividad:</strong><br/> "Crea listas únicas y personalizadas que reflejen tus gustos y preferencias. ¡La creatividad no tiene límites cuando se trata de elegir a tus héroes del campo!"
				  </p>
			</div>

		</div>




	);
}

export default QuienesSomos;