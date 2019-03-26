import React from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { material } from 'react-native-typography'


import FeaturedAdDetail from './FeaturedAdDetail';



export default class FeaturedAds extends React.Component {

    
    fetchFeaturedAds() {

    }

    

	render() {

        let dimensions = Dimensions.get("window");
        let imageHeight = Math.round((dimensions.width * 9) / 32);
        let imageWidth = (dimensions.width) / 2;

        return (
            <View>
            <View style={styles.headerContainer}>
            
        
        <Text style={[material.subheading, styles.headerText]}>{this.props.children}</Text>
        </View>
		
        <FeaturedAdDetail />
        </View>
        )
		
	}
}

const styles = StyleSheet.create({
	headerText: {
        color: '#0031ca',
        fontWeight: 'bold'
    },
    headerContainer: {
        flexDirection: "row"
    },
});
