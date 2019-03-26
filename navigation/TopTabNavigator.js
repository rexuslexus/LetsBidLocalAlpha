import { createMaterialTopTabNavigator } from 'react-navigation';


import SearchScreen from '../screens/SearchScreen';
import BrowseScreen from '../screens/BrowseScreen';
import PostScreen from '../screens/PostScreen';
import HomeScreen from '../screens/HomeScreen';

import DrawerNavigator from './Navigators';


export default TopTabNav = createMaterialTopTabNavigator(
	{
        Home: HomeScreen,
        Browse: BrowseScreen,
		Search: SearchScreen,
		Post: PostScreen
    },
    {
        initialRouteName: 'Home'
    }
);

