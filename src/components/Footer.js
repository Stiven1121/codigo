import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import '../hojas_de_estilos/home.css';




function Footer(){

	return (

		<div>

			<footer className="navbar navbar-dark bg-dark fixed-bottom">
 				<div className="container">
    				<span className="navbar-text">
      				© 2023 FootBall App
   				 	</span>
   				 	<span className="navbar-text">
      				 stivenjosuediaz27@gmail.com
   				 	</span>
   				 	<span className="navbar-text">
      				 +57 320 399 1889
   				 	</span>
  				</div>
			</footer>


		</div>




	);
}

export default Footer;