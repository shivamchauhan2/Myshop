import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducer'
let store=createStore(rootReducer,{
    items:[],
    totalAmount:0
},
    composeWithDevTools(applyMiddleware(thunk)))

export default store