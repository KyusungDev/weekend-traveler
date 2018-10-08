import React, { Component, createContext } from 'react';
import createUseConsumer from './Lib/createUseConsumer';

const Context = createContext();
const { Provider, Consumer: SelectionConsumer } = Context;

class SelectionProvider extends Component {
  state = {
    selection: ''
  };

  actions = {
    setSelection: value => {
      this.setState({ value });
    }
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

// HOC
// const withSelection = WrappedComponent => props => (
//   <SelectionConsumer>
//     {({ state, actions }) => (
//       <WrappedComponent
//         value={state.selection}
//         setSelection={actions.setSelection}
//       />
//     )}
//   </SelectionConsumer>
// );

const withSelection = createUseConsumer(SelectionConsumer);

export { SelectionProvider, SelectionConsumer, withSelection };
