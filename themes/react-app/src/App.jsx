import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import WebpackLogo from './img/webpack.svg';
import SSLogo from './img/silverstripe-logo.png';
import GraphQLLogo from './img/GraphQL_Logo.svg.png';
import MenuList from './components/MenuList';
import CodeExampleList from './pages/CodeExampleList';
import { withStyles } from 'material-ui/styles';
import TextExample from './components/TextFieldExampleControlled';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// Main menu
import MainMenu from './components/MenuList';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CodeExamplePage from './pages/CodeExamplePage'


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
  },
  menuHolder: {
    'display': 'flex',
    'align-items': 'center',
    'border-top': '2px solid #000',
    'border-bottom': '2px solid #000',
  }
};

/**
 * NOTE: It looks like all the routes want to go inside switch
 */
class App extends Component {
  render() {

    const { classes } = this.props;
    return (
      <div className="App">
        <Route exact path="/" component={CodeExamplePage} />
        <MainMenu />
        <Switch>


        </Switch>
      </div>
    )
  }
}
// export default App;
export default withStyles(styles)(App)
