import React from 'react';
import './App.css';


const Contador = (props) => (
    <h1 class="time-count">{props.horas}:{props.minutos}:{props.segundos}.{props.centesimos}</h1>
)

export default Contador;