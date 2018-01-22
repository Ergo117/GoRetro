import React from 'react';
import RouteProps from 'react-route-props';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';


class Listing extends React.Component {

  constructor(props) {
    super(props);
    this.findUserListings = this.findUserListings.bind(this);
    this.checkUser = this.checkUser.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  findUserListings() {
    this.props.getUserListings(this.props.listing.username);
  }

  checkUser() {
    console.log(this.props.username);
    console.log(this.props.listing.username);
    // console.log(this.props.listing._id);
  }

  deleteItem() {
    this.props.deleteListing(this.props.listing._id);
  }

  render() {
    let path = `/seller?username=${this.props.listing.username}`;

    return (
      <Item>
        <Item.Image onClick={this.checkUser} size ='small' src={ this.props.listing.imageUrl } />
        <Item.Content>
          <Item.Header as='a'>{ this.props.listing.title }</Item.Header>
          <Item.Meta>{ this.props.listing.category }</Item.Meta>
          <Link to={ path }>
          <Item.Extra onClick={ this.findUserListings }>
            { this.props.listing.username }
          </Item.Extra>
          </Link>
          <Item.Extra>{ this.props.listing.description}</Item.Extra>
        </Item.Content>
        { this.props.username === this.props.listing.username &&
        <button onClick={ this.deleteItem }>X</button> }
      </Item>
    );
  }
}

export default Listing;
