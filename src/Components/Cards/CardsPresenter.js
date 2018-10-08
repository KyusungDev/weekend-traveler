import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Card = styled.div`
  width: 100%;
  height: 80px;
  padding: 5px 5px 0px 5px;
  border-bottom: 1px solid ${oc.gray[3]};
  font-size: 0.8em;
  line-height: 15px;
  vertical-align: center;
`;

const SelectedCard = styled.div`
  width: 100%;
  height: 80px;
  padding: 5px 5px 0px 5px;
  border: 1px solid red;
  font-size: 0.8em;
  line-height: 15px;
  vertical-align: center;
`;

class CardsPresenter extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { index, item, setSelection, selected, setChange } = this.props;
    return (
      <div onClick={() => setChange(item, index)}>
        {selected ? (
          <SelectedCard>
            <div>행사명: {item.title}</div>
            <div>
              기간: {item.eventstartdate} ~ {item.eventenddate}
            </div>
            <div>주소: {item.addr1}</div>
          </SelectedCard>
        ) : (
          <Card>
            <div>행사명: {item.title}</div>
            <div>
              기간: {item.eventstartdate} ~ {item.eventenddate}
            </div>
            <div>주소: {item.addr1}</div>
          </Card>
        )}
      </div>
    );
  }
}

export default CardsPresenter;
