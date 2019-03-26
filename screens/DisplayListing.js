import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import MenuButton from '../components/MenuButton'

import { SocialIcon } from 'react-native-elements'

export default class DisplayListing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        
        <Text>Full item display screen</Text>
        
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
