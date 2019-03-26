import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class SearchScreen extends React.Component {
  render() {
    return (

      // Search field plus filters for search
      // 1. Render a search field
      // 2. Deal with search results (logic to send api search for entered text plus filters)
      






      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Search Screen</Text>
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
