import React, { Component, PureComponent } from 'react';
import CardsPresenter from './CardsPresenter';
import { withGlobal } from 'Contexts';

class CardsContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: '',
      selectedItem: null
    };
  }

  handleChange = (item, index) => {
    console.log(index, item);
    this.setState({
      index,
      selectedItem: item
    });

    // const { festivals, setSelection } = this.props;
    // setSelection(item);
  };

  render() {
    console.log('rend');
    const { festivals, setSelection } = this.props;
    return (
      <div>
        {festivals.map((item, index) => (
          <CardsPresenter
            key={index}
            index={index}
            item={item}
            selected={index === this.state.index}
            setSelection={setSelection}
            setChange={this.handleChange}
          />
        ))}
      </div>
    );
  }
}

export default withGlobal(({ state, actions }) => ({
  festivals: state.festivals,
  selection: state.selection,
  setSelection: actions.setSelection
}))(CardsContainer);
