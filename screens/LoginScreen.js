import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import axios from 'axios';

import { LoginButton, AccessToken } from 'react-native-fbsdk';
import MenuButton from './../components/MenuButton';

import HomeScreen from './HomeScreen';

import userStore from './../components/data/userStore';



export default class LoginScreen extends React.Component {


  state = { userState: [] };

  initUser(token) {

    
    
    fetch('https://graph.facebook.com/me?fields=name,email,friends,location,birthday,picture.type(large)&access_token=' + token)
    .then((response) => response.json())
    .then((json) => {
     
      userStore.user.profilePic = json.picture.data.url;
      userStore.user.fbID = json.id;
      userStore.user.username = json.name;
      userStore.user.email = json.email;
      userStore.user.numberOfFriends = json.friends.summary.total_count;
      userStore.user.currentTownID = json.location.name;
      userStore.user.currentTown = json.location.name;
      userStore.user.birthday = json.birthday;
      userStore.user.token = token;
      
      console.log(token)
     this.storeUserData(token)
        
    })
    .catch((err) => {
      console.log("An error occurred during graph fetch: " + err.message)
      
    })

  
  }
  storeUserData(token) {

    const params = {
      username: userStore.user.username,
      email: userStore.user.email,
      numberOfFriends: userStore.user.numberOfFriends,
      currentTown: userStore.user.currentTown,
      currentTownID: userStore.user.currentTownID,
      birthday: userStore.user.birthday,
      fbID: userStore.user.fbID,
      fbToken: token,
      profilePic: userStore.user.profilePic
    };
   
    axios.post('http://18.221.90.252:3000/register', params, {
      headers: {
        'content-type': 'application/json',
      }
    })

        

        .then(response => this.setState({ userState: response.data}))

          .catch((err) => {
            console.log("An error occurred during axios POST: " + err.message)
            
          })
        }
        

  
  
  
  
  render() {
    
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
          <View style={styles.body}>
              <Image style={styles.logoImage} source={require('./../assets/logo500x500.jpg')} />
              <Text style={styles.text1}>For Your Safety And Security we only accept Facebook accounts for registration.</Text>
              
            <LoginButton
                style={styles.fbButton}
                readPermissions={["public_profile","email","user_birthday","user_friends","user_location","user_photos"]}
                onLoginFinished={
                  (error, result) => {
                    if (error) {
                      console.log('login has error: ', result.error)
                    } else if (result.isCancelled) {
                      console.log('login is cancelled.')
                    } else {
                      AccessToken.getCurrentAccessToken().then((data) => {
                        const { accessToken } = data
                        this.initUser(accessToken)
                        
                        
                        
                      })
                    }
                  }
              }
                onLogoutFinished={() => {
                  console.log('User ' + userStore.user.username + ' logged out')
                userStore.user = [];}
                }/>
                </View>
                </View>
          
    );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 0,
    marginTop: 10,
    marginLeft: 10
  },
  text: {
    fontSize: 30,
  },
  body: {
    backgroundColor: '#ffffff',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 200
  },
  text1: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 80,
    textAlign: 'center'

  }
});
