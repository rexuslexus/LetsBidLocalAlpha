import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppContainer from './navigation/Navigators';


import { Provider } from 'mobx-react';

import userStore from './components/data/userStore';




export default class App extends React.Component {
  render() {
    return (
     
      <Provider userStore={userStore}>
      <View style={styles.container}>
        
        <AppContainer />
        
        
      </View>
      
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
