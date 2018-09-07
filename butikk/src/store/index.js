import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import  { combineReducers } from 'redux';
import navnReducer from'../Reducers/navnReducer';
import produktReducer from'../Reducers/produktReducer' ;
import ordreReducer from '../Reducers/ordreReducer';




const middleware=applyMiddleware(thunk);
const store = createStore(combineReducers({ordreReducer,navnReducer,produktReducer}),middleware);
store.subscribe(()=>{
    console.log("Store updated  ",store.getState())
   
});



export default store;