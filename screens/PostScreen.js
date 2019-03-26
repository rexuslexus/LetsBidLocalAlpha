import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class PostScreen extends React.Component {
  render() {
    return (

      // Step by step wizard to post a listing

      // 1. Take pictures
      // 2. Store pictures in API post
      // 3. Provide a title and description
      // 4. Choose listing style
      // 5. Provide the pricing/bidding options
      // 6. Submit listing
      // 7. Logic check the listing then send to API via POST
      // 8. Confirm the listing is posted by displaying listing or dealing with errors
      




      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Create A Listing</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 0,
    marginTop: 10,
    marginLeft: 10
  },
  text: {
    fontSize: 30,
  }
});
