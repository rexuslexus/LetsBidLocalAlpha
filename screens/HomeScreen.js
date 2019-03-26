import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import TopTabNav from '../navigation/Navigators';





import MenuButton from '../components/MenuButton'
import { SearchBar } from 'react-native-elements';
import FeaturedAds from '../components/FeaturedAds';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container1}>
          
        
        <MenuButton navigation={this.props.navigation} />
        
        
        </View>
        <View style={styles.container2}>
        
        
            
        
          
         
        </View>
        <View>
        <FeaturedAds> FEATURED ADS</FeaturedAds>
        <FeaturedAds> RECENT ADS</FeaturedAds>
        </View>
      </View>
      
      
        
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'flex-end',
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10
  },
  container2: {
    marginTop: 40,
    marginBottom: 5
  },
  topTabNav: {

  }
});

