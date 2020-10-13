import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0) ? 
        <button className="cronometro-btn cronometro-btn-green" onClick={props.iniciar}>Iniciar</button> : ""
      }

      {(props.status === 1) ? 
        <div>
          <button className="cronometro-btn cronometro-btn-blue" onClick={props.tempoParcial}>Parcial</button>
          <button className="cronometro-btn cronometro-btn-red" onClick={props.parar}>Parar</button>
        </div> : ""
      }

      {(props.status === 2) ? 
        <div>
          <button className="cronometro-btn cronometro-btn-green" onClick={props.retomar}>Retomar</button>
          <button className="cronometro-btn cronometro-btn-yellow" onClick={props.zerar}>Zerar</button>
        </div> : ""
      }
    </div>
  );
}

export default BtnComponent;