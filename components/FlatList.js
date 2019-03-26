import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';





import categoryStore from './../components/data/categoryStore';
import { observer } from 'mobx-react';


@observer
export default class CategoryList extends React.Component {

 componentDidMount() {
    categoryStore.getCategories()

    

 }

    
  renderTopLevel() {

        
    return (
      <Text>Test</Text>
    )
    
    }

  
    
      

       

         
        

      render() {

       return (

        // Work with the array to render the categories

        // 1. Is it top level?
        // 2. Render the name, image of category in a flatlist
        // 3. Populate subcategory when clicking on top level item
        // 4. Accordion the flatlist so that sub categories pop from top level
        // 5. Load the listing page for that category
        
       <Text>{this.renderTopLevel()}</Text>
       
       
       )

        
          
        
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
