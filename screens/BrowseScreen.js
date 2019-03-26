import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from '../components/MenuButton'

import FlatList from '../components/FlatList';

export default class BrowseScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        
        <Text style={styles.text}>Browse By Category</Text>
        <FlatList />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    
  }
});
