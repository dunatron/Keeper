import React, {Component} from 'react';
import {gql} from 'react-apollo';
import {propType as fragmentPropType} from 'graphql-anywhere';
import {withStyles} from 'material-ui/styles';
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ReactModal from 'react-modal';




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
    const {classes, menuitem: {ID, URLSegment, Title, MenuTitle, Content, Sort, ShowInMenus}} = this.props;
    console.log('ShowMe' + ShowInMenus);

    return (
     // <a href={URLSegment} className={classes.menuItemClass}>
     //   {MenuTitle}
     //   {ShowInMenus}
     // </a>
      <Button dense color='primary' href={URLSegment} className={classes.menuItemClass}>
        {MenuTitle}
      </Button>
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
}
  `
};

MenuItem.propTypes = {
  menuitem: fragmentPropType(MenuItem.fragments.menuitem).isRequired
};

export default withStyles(styles)(MenuItem);