import React, { Component, createContext } from 'react';
import createUseConsumer from './Lib/createUseConsumer';

const Context = createContext();
const { Provider, Consumer: GlobalConsumer } = Context;

class GlobalProvider extends Component {
  state = {
    selection: null,
    festivals: []
  };

  actions = {
    setFestivals: festivals => this.setState({ festivals }),
    setSelection: item => this.setState({ selection: item })
  };

  render() {
    console.log('render');
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

const withGlobal = createUseConsumer(GlobalConsumer);

export { GlobalProvider, GlobalConsumer, withGlobal };
