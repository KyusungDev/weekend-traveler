import React from 'react';
import styled from 'styled-components';
import Map from '../NaverMap';
import { BrowserRouter as Router, withRouter, Route } from 'react-router-dom';
import Cards from 'Components/Cards';

const AppContainer = styled.div`
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Nav = styled.div`
  flex: 0 0 400px;
  height: 100vh;
  overflow-y: auto;
`;

const MapWrapper = styled.div`
  flex: 1;
`;

const TabWrapper = styled.div`
  width: 100%;
  height: 50px;
  float: left;
`;

const Tabs = styled.li`
  float: left;
`;

class AppPresenter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tourlist, currentTarget } = this.props;
    return (
      <Router>
        <AppContainer>
          <Nav>
            <Cards />
          </Nav>
          <MapWrapper>
            <Map
              tourlist={tourlist}
              currentTarget={currentTarget}
              {...this.props}
            />
          </MapWrapper>
        </AppContainer>
      </Router>
    );
  }
}

export default AppPresenter;
