import React, { Component } from 'react';

class ComponenteCambio extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: 0};
  }

  componentDidMount() {
    console.log('El componente se ha montado.');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      console.log(`El contador ha cambiado a: ${this.state.contador}`);
    }
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

export default ComponenteCambio;
