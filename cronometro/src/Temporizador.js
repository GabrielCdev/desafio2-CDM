import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    const [timerDias, setTimerDias] = useState('00');
    const [timerHoras, setTimerHoras] = useState('00');
    const [timerMinutos, setTimerMinutos] = useState('00');
    const [timerSegundos, setTimerSegundos] = useState('00');

    let intervaloTemporizador = useRef();

    const iniciarTemporizador = () => {
        const dataTemporizador = new Date(' 10, 13 2020 00:00:00').getTime();

        intervaloTemporizador = setInterval(() => {
            const atual = new Date().getTime();
            const distancia = dataTemporizador - atual;

            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor(distancia % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutos = Math.floor(distancia % (1000 * 60 * 60) / (1000 * 60));
            const segundos = Math.floor(distancia % (1000 * 60) / 1000);

            if(distancia < 0) {
                // Parar o temporizador
                clearInterval(intervaloTemporizador.current);
            } else {
                // Atualizar o temporizador
                setTimerDias(dias);
                setTimerHoras(horas);
                setTimerMinutos(minutos);
                setTimerSegundos(segundos);
            }
        }, 1000);
    };

    // Componentes
    useEffect(() => { 
        iniciarTemporizador();
        return() => {
            clearInterval(intervaloTemporizador.current);
        };
    });
    
    return (
        <section className="timer-container">
            <section className="timer">
                <div>
                    <span className="mdi mdi-calendar-clock timer-icon"></span>
                    <h2>Temporizador</h2>
                </div>
                
                <div>
                    <section>
                        <p>{timerDias}</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerHoras}</p>
                        <p><small>Horas</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerMinutos}</p>
                        <p><small>Minutos</small></p>
                    </section>
                    <span>:</span>

                    <section>
                        <p>{timerSegundos}</p>
                        <p><small>Segundos</small></p>
                    </section>
                </div>
            </section>
        </section>
    );
};

export default App;
