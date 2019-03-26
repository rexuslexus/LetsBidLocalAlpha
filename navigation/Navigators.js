import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';


import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import MyAdsScreen from '../screens/MyAdsScreen';
import SearchScreen from '../screens/SearchScreen';
import DashboardScreen from '../screens/DashboardScreen';


import TopTabNav from './TopTabNavigator';



import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH * 0.83,
	contentComponent: ({ navigation }) => {
		return (<MenuDrawer navigation={navigation} />)
	}
}

const DrawerNavigator = createDrawerNavigator(
	{
		Home: {
			screen: TopTabNav
		},
		Settings: {
			screen: SettingsScreen
		},
		Login: {
			screen: LoginScreen
		},
		MyAds: {
			screen: MyAdsScreen
		},
		Search: {
			screen: SearchScreen
		},
		Dashboard: {
			screen: DashboardScreen
		}
	},
	DrawerConfig
);





export default createAppContainer(DrawerNavigator);