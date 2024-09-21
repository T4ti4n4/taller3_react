import React, { Component } from 'react';

class Componente extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: 0};
  }

  componentDidMount() {
    console.log('El componente se ha montado.');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('El componente se ha actualizado.');
  }

  componentWillUnmount() {
    console.log('El componente se va a desmontar.');
  }

  incrementarContador = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1
    }));
  };

  render() {
    return (
      <div>
        <h4>Contador: {this.state.contador}</h4>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default Componente;
