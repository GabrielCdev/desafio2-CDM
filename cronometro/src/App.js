import React from 'react';
import DisplayComponent from './Components/DisplayComponent';
import BtnComponent from './Components/BtnComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({cs:0, ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  // Não iniciado = 0
  // Iniciado = 1
  // Parado = 2
  
  const iniciar = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1)); // Verificar esse valor
  };

  var atualizaCs = time.cs, atualizaMs = time.ms, atualizaS = time.s, atualizaM = time.m, atualizaH = time.h;
  
  const run = () => {
    if(atualizaM === 60) {
      atualizaH++;
      atualizaM = 0;
    }

    if(atualizaS === 60) {
      atualizaM++;
      atualizaS = 0;
    }

    if(atualizaMs === 100) {
      atualizaS++;
      atualizaMs = 0;
    }

    if(atualizaCs === 100) { // Verificar esse valor, que corresponde aos centésimos de segundo!!!
      atualizaMs++;
      atualizaCs = 0;
    }

    atualizaCs++;
    return setTime({cs:atualizaCs, ms:atualizaMs, s:atualizaS, m:atualizaM, h:atualizaH});
  };

  const parar = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const zerar = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({cs:0, ms:0, s:0, m:0, h:0});
  };

  const retomar = () => iniciar();

  return (
    <div className="App-header">
        <div className="clock-holder">
            <div className="cronometro">
              <DisplayComponent time={time}/>
              <BtnComponent status={status} retomar={retomar} zerar={zerar} parar={parar} iniciar={iniciar}/>
            </div>
        </div>
    </div>
  );
}

export default App;