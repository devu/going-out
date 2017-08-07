const userList = [
    {
        "name": "John Davis",
        "wont_eat": ["Fish"],
        "drinks": ["Cider", "Rum", "Soft drinks"],
        "active": false
    },
    {
        "name": "Gary Jones",
        "wont_eat": ["Eggs", "Pasta"],
        "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"],
        "active": false
    },
    {
        "name": "Robert Webb",
        "wont_eat": ["Bread", "Pasta"],
        "drinks": ["Vokda", "Gin", "Whisky", "Rum"],
        "active": false
    },
    {
        "name": "Gavin Coulson",
        "wont_eat": [],
        "drinks": ["Cider", "Beer", "Rum", "Soft drinks"],
        "active": false
    },
    {
        "name": "Alan Allen",
        "wont_eat": ["Meat", "Fish"],
        "drinks": ["Soft drinks", "Tea"],
        "active": false
    },
    {
        "name": "Bobby Robson",
        "wont_eat": ["Mexican"],
        "drinks": ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"],
        "active": false
    },
    {
        "name": "David Lang",
        "wont_eat": ["Chinese"],
        "drinks": ["Beer", "cider", "Rum"],
        "active": false
    } 
]

//in users reducer marking active user to allow multiple selection
const users = (state = [], action) => {
    switch (action.type) {
        case 'SELECT_USER':
            for (let item of userList) {
                if(item.name === action.user.name){
                    if(item.active){
                        item.active = false;
                    } else {
                        item.active = true;
                    }
                }
            }
            return userList
        default:
            return userList
    }
}

export default users