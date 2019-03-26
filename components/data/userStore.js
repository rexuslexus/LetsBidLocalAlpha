import { observable } from 'mobx'


let index = 0;

class ObservableUserStore {
    constructor() {
        this.user = observable([]);
    }
    @observable user = [
        {
            username: 'Not Logged In',
            email: '',
            numberOfFriends: '',
            currentTown: '',
            birthday: '',
            fbID: '',
            fbToken: '',
            profilePic: '',
            currentTownID: ''

    }
    ]

    
}

const userStore = new ObservableUserStore()

export default userStore;

