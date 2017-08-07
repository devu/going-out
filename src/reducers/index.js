import { combineReducers } from 'redux'
import UsersReducer from './users-reducer'
import VenuesReducer from './venues-reducer'

const RootReducer = combineReducers({
  users: UsersReducer,
  venues: VenuesReducer
})

export default RootReducer