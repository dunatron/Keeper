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
    'border': '1px solid red',
  },

};

class MenuItem extends Component {

  constructor() {
    super();

    this.state = {};

  }


  render() {
    const {classes, menuItem: {ID, URLSegment, Title, MenuTitle, Content, Sort}} = this.props;

    return (
      <MenuItem className={classes.menuItemClass}>
        <li>
          <a href={URLSegment}>
            {ID}
            {Title}
            {MenuTitle}
            {Content}
            {Sort}
          </a>
        </li>
      </MenuItem>
    );
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
}
  `
};

MenuItem.propTypes = {
  menuitem: fragmentPropType(MenuItem.fragments.menuitem).isRequired
};

export default withStyles(styles)(MenuItem);