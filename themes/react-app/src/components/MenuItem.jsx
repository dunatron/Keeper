import React, {Component} from 'react';
import {gql} from 'react-apollo';
import {propType as fragmentPropType} from 'graphql-anywhere';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ReactModal from 'react-modal';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CodeExamplePage from '../pages/CodeExamplePage';




const styles = {
  menuItemClass: {
    'flex': '1 1 0', // flex-grow: 1; flex-shrink: 1; flex-basis: 0;
    'text-align': 'center',
    'padding': '0.7em'
  },

};

class MenuItem extends Component {

  constructor() {
    super();

    this.state = {};

  }


  render() {
    const {classes, menuitem: {ID, URLSegment, Title, MenuTitle, Content, Sort, ShowInMenus, ComponentType}} = this.props;
    console.log('ShowMe' + ShowInMenus);

    let ParsedComponentType = CodeExamplePage;

    if (ComponentType.Name === 'HomePage') {
      ParsedComponentType = HomePage
    }

    console.log('ABout to get the Compoent Name from SS');
    console.log(ComponentType.Name);
    console.log('ParsedComponentType');
    console.log(ParsedComponentType);
    console.log('An actual Component');
    console.log(CodeExamplePage);

    return (
      <div>
        {/*<Route exact path={`/`+URLSegment} component={CodeExamplePage} />*/}
        <Link to={URLSegment}>
          <Button dense color='primary' className={classes.menuItemClass}>
            {MenuTitle}
            {ComponentType.Name}
          </Button>
        </Link>
      </div>
    )
  }

}

MenuItem.fragments = {
  menuitem: gql`
fragment PagesOverview on Page {
  ID
  URLSegment
  Title
  MenuTitle
  Content
  Sort
  ShowInMenus
  ComponentType {
    ID
    Name
  }
}
  `
};

MenuItem.propTypes = {
  menuitem: fragmentPropType(MenuItem.fragments.menuitem).isRequired
};

export default withStyles(styles)(MenuItem);