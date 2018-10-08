import React, { Component, createContext } from 'react';
import createUseConsumer from './Lib/createUseConsumer';

const Context = createContext();
const { Provider, Consumer: EnvConsumer } = Context;

class EnvProvider extends Component {
  state = {};
  actions = {};

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// HOC
// const withEnv = WrappedComponent => props => (
//   <EnvConsumer>
//     {({ state, actions }) => (
//       <WrappedComponent number={state.number} increment={actions.increment} />
//     )}
//   </EnvConsumer>
// );

const withEnv = createUseConsumer(EnvConsumer);

export { EnvProvider, EnvConsumer, withEnv };
