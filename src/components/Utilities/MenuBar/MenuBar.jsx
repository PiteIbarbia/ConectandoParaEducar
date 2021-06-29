import React from 'react';
import { Link } from "react-router-dom";
import './MenuBar.css';
import Logo1 from '../../../img-jpg/1.png';

export default function MenuBar(props) {
  return (
    <div className='navbar'>
      <div className='navbarName'>
        <Link to='/' >
          {/* <img src={Logo} alt="Educando-logo" /> */}
          <img src={Logo1} alt="Educando-logo" />
        </Link>
        <Link className='navbarText' to='/' >Conectando para Educar</Link>
      </div>
      <div className='navbarOptions'>
        <Link to="/QuienesSomos">Quienes somos</Link>
        <Link to='/NuestrosValores'>Nuestros valores</Link>
          <div className='navbarProyectos'>
            <select>
              <option value="">Proyectos</option>
            <ul>
              <Link to="/Proyectos/BlaCava"><li>Barrio "La Cava"</li></Link>
              <Link to="/Proyectos/SdelEstero"><li>Santiago del Estero</li></Link>
              <Link to="/Proyectos/RicardoRojas"><li>Ricardo Rojas</li></Link>
            </ul>
            
            </select>
          </div>
        <Link to='/Contactanos'>Contactanos</Link>
      </div>
    </div>
          
  )
}