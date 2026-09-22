import {applyMiddleware, legacy_createStore} from 'redux'
import { combineReducers } from 'redux'
import {thunk}  from 'redux-thunk'
import deviceReducer from './deviceReducer'
import typeReducer from './typeReducer'
import adminRouter from './adminReducer'
import brandReducer from './brandReduser'
import userReducer from './userReducer'
import basketReducer from './basketReducer'
import reviewsReducer from './reviewsReducer'


let reduceres = combineReducers({
    devices:deviceReducer,
    types:typeReducer,
    brands:brandReducer,
    admin:adminRouter,
    user:userReducer,
    basket:basketReducer,
    reviews: reviewsReducer
})


let store = legacy_createStore(reduceres,applyMiddleware(thunk))


window.st = store

export default store