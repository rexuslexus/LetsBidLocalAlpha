import React from 'react';
import {
	View, 
	Text,
	Image,
	ScrollView,
	Platform,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

import LoginScreen from './../screens/LoginScreen';

import userStore from './../components/data/userStore';




const WIDTH = Dimensions.get('window').width 
const HEIGHT = Dimensions.get('window').height 

export default class MenuDrawer extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
		  name: ''
		}
	  }
	  
	navLink(nav, text) {
		return(
			<TouchableOpacity style={{height: 50}} onPress={() => this.props.navigation.navigate(nav)}>
				<Text style={styles.link}>{text}</Text>
			</TouchableOpacity>
		)
	}

	displayFriendCount() {
		if (userStore.user.numberOfFriends) {
			return <Text style={styles.friendCount}>Friends: {userStore.user.numberOfFriends}</Text>
		}
			else {
		
			}
	}
	
	displayLocation() {
			if (userStore.user.currentTown) {
				return <Text style={styles.friendCount}>Current City: {userStore.user.currentTown}</Text>
		}
			else {
			}
	}
	
	displayProfilePic() {
		if (userStore.user.profilePic) {
			return <Image style={styles.img} source={{uri: userStore.user.profilePic}} />
	}
		else {
			return <Image style={styles.img} source={require('./../assets/placeholder.png')}/>
		}
}

displayUsername() {
	if (userStore.user.username) {
		return <Text style={styles.name}>{userStore.user.username}</Text>
}
	else {
		return <Text style={styles.name}>Guest</Text>
	}
}


	render() {
		return(
			<View style={styles.container}>
				<ScrollView style={styles.scroller}>
					<View style={styles.topLinks}>
						<View style={styles.profile}>
							<View style={styles.imgView}>
								{this.displayProfilePic()}
								
							</View>
							<View style={styles.profileText}>
								{this.displayUsername()}
								{this.displayFriendCount()}
								{this.displayLocation()}
							</View>
						</View>
					</View>
					<View style={styles.bottomLinks}>
						{this.navLink('Home', 'Home')}
						{this.navLink('Settings', 'Settings')}
						{this.navLink('Login', 'Login')}
						{this.navLink('MyAds', 'My Ads')}
						{this.navLink('Search', 'Search')}
						{this.navLink('Dashboard', 'Dashboard')}
					</View>
				</ScrollView>
				<View style={styles.footer}>
					<Text style={styles.description}>Copyright LetsBidLocal 2019</Text>
					<Text style={styles.version}>v0.1 alpha</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'lightgray',
	},
	scroller: {
		flex: 1,
	},
	profile: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 25,
		borderBottomWidth: 1,
		borderBottomColor: '#777777',
	},
	profileText: {
		flex: 3,
		flexDirection: 'column',
		justifyContent: 'center',
	},
	name: {
		fontSize: 20,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
	},
	friendCount: {
		fontSize: 14,
		paddingBottom: 5,
		color: 'white',
		textAlign: 'left',
	},
	imgView: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
	img: {
		height: 70,
		width: 70,
		borderRadius: 50,
	},
	topLinks:{
		height: 160,
		backgroundColor: '#0031ca',
	},
	bottomLinks: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 10,
		paddingBottom: 450,
	},
	link: {
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		textAlign: 'left',
	},
	footer: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderTopWidth: 1,
		borderTopColor: 'lightgray'
	},
	version: {
		flex: 1, 
		textAlign: 'right',
		marginRight: 14,
		color: 'gray'
	},
	description: {
		flex: 1, 
		marginLeft: 20,
		fontSize: 12,
	}
})