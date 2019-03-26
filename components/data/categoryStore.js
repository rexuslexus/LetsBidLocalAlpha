import { observable } from 'mobx'


let index = 0;

class CategoryStore {
    
    @observable category = [
        {
            name: '',
            subcategories: [
                {
                    name: ''
            }
        ]

    }
    ]

    getCategories() {
       
    fetch('http://18.221.90.252:3000/categories')
    .then((response) => response.json())
    .then((json) => {
     
        this.category = json;
     // Need logic here to take json returned from API and populate the CategoryStore
     // Once in store, return via this function the categories in an array to the Component

      
      console.log(this.category.slice())
      
     
        
    })
    .catch((err) => {
      console.log("An error occurred during fetch: " + err.message)
      
    })

  
    } 

    


    
}




const categoryStore = new CategoryStore()

export default categoryStore;
