import React from 'react';
import mui from 'material-ui';
import {RouteHandler} from 'react-router';

const ThemeManager = new mui.Styles.ThemeManager();
const Colors = mui.Styles.Colors;
const AppBar = mui.AppBar;

class App extends React.Component {
  constructor() {
    super();

    ThemeManager.setPalette({
      primary1Color: Colors.blue500,
      primary2Color: Colors.blue700,
      primary3Color: Colors.blue100,
      accent1Color: Colors.pink400
    });
  }

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <AppBar title="My Awesome Chat App" />
        <RouteHandler />
      </div>
    );
  }
}

export default App;