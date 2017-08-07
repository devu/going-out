import users from './users-reducer';

const venueList = [
    {
        "name": "El Cantina",
        "food": ["Mexican"],
        "drinks": ["Soft drinks", "Tequila", "Beer"]
    },
    {
        "name": "Twin Dynasty",
        "food": ["Chinese"],
        "drinks": ["Soft Drinks", "Rum", "Beer", "Whisky", "Cider"]
    },
    {
        "name": "Spice of life",
        "food": ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
        "drinks": ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
    },
    {
        "name": "The Cambridge",
        "food": ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
        "drinks": ["Vokda", "Gin", "Cider", "Beer", "Soft drinks"]
    },
    {
        "name": "Wagamama",
        "food": ["Japanese"],
        "drinks": ["Beer", "Cider", "Soft Drinks", "Sake"]
    },
    {
        "name": "Sultan Sofrasi",
        "food": ["Meat", "Bread", "Fish"],
        "drinks": ["Beer", "Cider", "Soft Drinks"]
    },
    {
        "name": "Spirit House",
        "food": ["Nuts", "Cheese", "Fruit"],
        "drinks": ["Vodka", "Gin", "Rum", "Tequila"]
    },
    {
        "name": "Tally Joe",
        "food": ["Fish", "Meat", "Salad", "Deserts"],
        "drinks": ["Beer", "Cider", "Soft Drinks", "Sake"]
    },
    {
        "name": "Fabrique",
        "food": ["Bread", "Cheese", "Deli"],
        "drinks": ["Soft Drinks", "Tea", "Coffee"]
    },
]

//for simplicity we always generate fresh and full list, avoiding modification of original data
const getVenuesList = () => {
    var list = [];
    for (let venue of venueList) {
        venue.goodToGo = true;
        list.push(venue);
    }
    return list
}

const venues = (state = [], action) => {
    
    switch (action.type) {
        case 'SELECT_USER':
            
            let selectedVenues = getVenuesList();
            let activeUsers = [];
            let maxUser = 0;
            
            for (let user of action.users) {
                if(user.active === true){
                    activeUsers.push(user);
                    maxUser++;
                }
            }

            //if nobody is selected return empty list
            if(maxUser == 0) return activeUsers;

            //process of elimination marking it with goodToGo flag
            for (let selected of activeUsers){
                for (let fussy of selected.wont_eat){
                    selectedVenues.forEach(function(venue) {
                        if(venue.food.indexOf(fussy) > -1){
                            venue.goodToGo = false;
                        };
                    }, this);
                }

                for (let drink of selected.drinks){
                    selectedVenues.forEach(function(venue) {
                        if(venue.drinks.indexOf(drink) < -1){
                            venue.goodToGo = false;
                        }
                    }, this);
                }
            }
            
            return selectedVenues
        default:
            return state
    }
}

export default venues