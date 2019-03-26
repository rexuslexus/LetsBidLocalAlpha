import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import Card from './card';
import CardSection from './cardsection';



const ListingDetail = ({ listing }) => {
    
    const {title, image1, category, sellerid } = listing;
    
    const {
        headerTextStyle, 
        imageStyle, 
        imageContainerStyle 
    } = styles;

    

    return (
        
        <Card>
            
            

            <CardSection>
                
                
                    <View style={imageContainerStyle}>

                        <Image
                            style={imageStyle}
                            source={{uri: image1}} />
                        
                        
                        
                    </View>
                

                  
                
                    
            </CardSection>

            <CardSection>

                <Text style={headerTextStyle}>{title}</Text>

            </CardSection>

            
           

        </Card>

    );
}



const styles = {
    
    headerTextStyle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0031ca'
        
    },

    imageStyle: {
        flex: 1,
        aspectRatio: 1.5,
        resizeMode: 'contain',
        
    },

    imageContainerStyle: {
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: 0,
        MarginRight: 10
    },
    listingHeaders: {
        alignSelf: 'flex-end'

    }


};


export default ListingDetail;