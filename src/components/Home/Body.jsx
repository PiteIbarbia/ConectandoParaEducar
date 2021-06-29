import React from 'react';
import './Body.css';
import picture1 from '../../img-jpg/Conectando-Carousel0.jpg';
import test from '../../img-jpg/Test.jpg';

export default function Body(props) {
    return(
        <div className='homeBody'>
            <img src={picture1} alt="equipo" />
            <h1>¿QUÉ ES CONECTANDO PARA EDUCAR?</h1>
            <p>
                Conectando para educar es un proyecto que nació para dar respuesta a una necesidad tan vital como es la educación de los chicos que, por sus condiciones de vida, no tienen acceso a internet, y por ende, a los contenidos educativos. Estamos convencidos de que la educación es la clave para acceder a un futuro mejor, con posibilidades de trabajo, de inserción social y que es la mejor forma de crecer para alcanzar los sueños de tantos chicos y que sus padres tienen para ellos.
            </p>
            <img src={test} alt='team' />
        </div>
    )
}