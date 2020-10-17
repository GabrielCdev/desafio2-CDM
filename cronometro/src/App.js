import React from 'react';
import Contador from './Contador'
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';
import Temporizador from './Temporizador'
import WorldClock from './WorldClock'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      centesimos: 0,
      segundos: 0,
      minutos: 0,
      horas: 0,
      stop: false,
      nameStop: "Stop",
      name: "Relógio", 
      parcial: ""
    };
  }

   zerarCronometro() {
      this.state.segundos = 0
      this.state.minutos = 0
      this.state.horas = 0
      this.state.parcial = ""
   }
  
  parcial(){
    let p = this.state.horas+ ":"+ this.state.minutos+ ":"+ this.state.segundos + "."+ this.state.centesimos + "\n\n"
    this.state.parcial = this.state.parcial + p
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
    })
    
    if (this.state.stop)
      this.state.nameStop = "Stop"
    else
      this.state.nameStop = "Start"
  }

  incrementarCentesimo () {
    if (this.state.stop === false){
      this.setState(
        function (state, props) {
          if (state.centesimos > 99){
            this.zerarCentesimos();
            this.incrementarSegundo(state);
          }
          return({ centesimos: state.centesimos + 1})
        }
      )
    }
  }

  incrementarSegundo () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.segundos >= 59){
            this.zerarSegundos();
            this.incrementarMinuto(state);
          }  
          return({ segundos: state.segundos + 1})
         }
      )
    }
  }

  incrementarMinuto () {
    if (this.state.stop === false){
      this.setState(
        function (state, props) {
          if (state.minutos >= 59){
            this.zerarMinutos();
            this.incrementarHora(state);
          }
          return({ minutos: state.minutos + 1 })
        }
      )
    }
  }
  
  incrementarHora (state) {
    this.setState(() => { 
      return {horas: state.horas +1}
    })
  };

  zerarCentesimos () {
    this.setState({
      centesimos: 0
    })
  }
  
  zerarSegundos () {
    this.setState({ 
      segundos: 0 
    })
  }

  zerarMinutos () {
    this.setState({
      minutos: 0
    })
  }

  zerarHoras () {
    this.setState({
      horas: 0
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementarCentesimo(), 10)
  }
  

  render(){
    return (
      <div className="container">
        <div className="timer">
          <div className="espaco">
            <Contador horas={this.state.horas} minutos={this.state.minutos} segundos={this.state.segundos} centesimos={this.state.centesimos} />
            <LabelRelogio name={this.state.name} />
            <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
            <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
            <Botao onClick={() => this.parcial()} label={"Parcial"} />
            <LabelRelogio name={this.state.parcial} />
          </div>
        </div>

        <div className="v-separator2">
          <Temporizador />
        </div>

        <div className="v-separator3">
          <WorldClock />
        </div>
      </div>
    );
  }
}

export default App;
