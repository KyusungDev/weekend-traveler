import React, { Component, createContext } from 'react';
import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import AppPresenter from './AppPresenter';
import typography from '../../typography';
import { withGlobal } from 'Contexts';

const baseStyles = () => injectGlobal`
  ${reset};
  ${typography};
  box-sizing: border-box; 
  a { text-decoration:none!important; };
`;

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const urlFestivals =
      'http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?serviceKey=ovetGQy5H99noe%2FM12s%2B5x0G%2FTGDtLGE7p9I1NYNqVfD0XarCCwjYL07BNSA8v5HabqzK0LIO7lN7ASVP6Y%2BwA%3D%3D&MobileOS=ETC&MobileApp=AppTest&arrange=A&listYN=Y&eventStartDate=20180925&eventEndDate=20181231&_type=json&&numOfRows=10000';
    this.fetchAsync(urlFestivals)
      .then(json => {
        const {
          response: {
            body: {
              items: { item }
            }
          }
        } = json;

        const { setFestivals } = this.props;
        setFestivals(item);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  fetchAsync = async url => {
    const response = await fetch(url);
    return await response.json();
  };

  render() {
    baseStyles();
    return <AppPresenter />;
  }
}

export default withGlobal(({ state, actions }) => ({
  setFestivals: actions.setFestivals
}))(AppContainer);
