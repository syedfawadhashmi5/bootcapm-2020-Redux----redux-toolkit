import {createStore} from 'redux'
import userReducer from './UserReducer'

const Store = createStore(userReducer)

export default Store