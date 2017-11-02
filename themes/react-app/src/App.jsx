import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import WebpackLogo from './img/webpack.svg';
import SSLogo from './img/silverstripe-logo.png';
import GraphQLLogo from './img/GraphQL_Logo.svg.png';
import CodeExampleList from './pages/CodeExampleList';
import { withStyles } from 'material-ui/styles';

const styles = {
  cardHolder: {
    'display': 'flex',
    'align-items': 'center',
    'overflow': 'auto',
    'box-sizing': 'border-box',
    'width': '100%',
    'justify-content': 'center',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'flex-flow': 'row wrap',
    'align-content': 'flex-end'
  }
};

class App extends Component {
  render() {

    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={SSLogo} className="ss-logo" alt="logo" />
          <img src={GraphQLLogo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={WebpackLogo} className="App-logo" alt="logo" />
        </header>

        <p className="App-intro">
          Welcome to SS4 + REACT + WEBPACK <br />
          To get started, edit <code>src/App.js</code> and save to reload Hello.
        </p>
        <div className={classes.cardHolder}>
          <CodeExampleList />
        </div>
      </div>
    )
  }
}

// export default App;
export default withStyles(styles)(App)
