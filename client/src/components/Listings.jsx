import React from 'react';
import { Link } from 'react-router-dom';
import Listing from './Listing.jsx';
import { Item } from 'semantic-ui-react';

const Listings = (props) => (
  <div className="container listingsView">
    <h3>{(props.category && props.subCategory) ? `${props.category} > ${props.subCategory}` : props.category ? props.category : props.isSearchResults ? 'Search Results' : 'Most Recent Listings'}</h3>
    <h3>{!props.listings.length ? `Sorry, no relavent listings.`: ''}</h3>
    <Item.Group divided>
      { props.listings.map(listing =>
        <Listing
          listing={ listing }
          key={ listing._id }
          getUserListings={ props.getUserListings }
          username={ props.username }
          deleteListing={ props.deleteListing }
        />) }
    </Item.Group>
  </div>
);

export default Listings;
