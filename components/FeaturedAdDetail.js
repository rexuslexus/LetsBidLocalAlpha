import React from 'react'
import { StyleSheet, Image, Dimensions, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { ThemeConsumer } from 'react-native-elements';
import ListingDetail from './ListingDetail';

import axios from 'axios';


export default class FeaturedAdDetail extends React.Component {

    state = { listings: [] };
    
    componentWillMount () {
        axios.get('http://18.221.90.252:3000/listings', {
            headers: {
                Authorization: 'jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzNhZTExMmUxOTIxNzZiYzgzYmU1NjEiLCJlbWFpbCI6InJleHVzbGV4dXNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkcnltQWtlNzQ5L05janJhZFl6N3RFdUcwSkFRa0JQZHowekJvN0dzaUlWbUdNdDRHR2VTWE8iLCJfX3YiOjAsImlhdCI6MTU0OTUwODg2NiwiZXhwIjoxNTQ5NTE2MDY2fQ.skgqy4J4bSsT115QHBSjxd7GJPoljrjN193S2XXjr34'

            }
        })

        .then(response => this.setState({ listings: response.data}));

  
    }

    renderListings() {
        return this.state.listings.map(listing =>
            
            <ListingDetail key={listing._id} listing={listing} />
            
            )
    }
    
    render() {
        

		return(
            <ScrollView horizontal={true}>
            {this.renderListings()}
			</ScrollView>
		)
	}
}


