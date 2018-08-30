import {createStore} from 'redux';
import  { combineReducers } from 'redux';
import navnReducer from'../Reducers/navnReducer';
import produktReducer from'../Reducers/produktReducer' ;
import ordreReducer from '../Reducers/ordreReducer';





const store = createStore(combineReducers({ordreReducer,navnReducer,produktReducer}));
store.subscribe(()=>{
    console.log("Store updated  ",store.getState())
});
export default store;