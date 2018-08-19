import {createStore} from 'redux';
import  { combineReducers } from 'redux';

import navnReducer from'../Reducers/navnReducer';
//import constants from './constants';
console.log("Hva er contstants")


const initialState ={
    inputTextAdr:"",
    inputTextNavn:'',
    navn:'',
    adresse:'Skien',
    ordre:{
        prodNavn:'',
        pris:0,

    },
    ordreListe:[],
    produkter:[
        { 
        id:1,
            prodNavn:'Seilbåt',
        
    pris:45,
description:'Fin fin seilbåt'   , 
thumbnail:'https://static1.clickandboat.com/v1/p/itahnk4am5g4mdfblfceqoww1wuzp730.big.jpg.gz'
},
{ 
    id:2,
        prodNavn:'Bil',
    
pris:45,
description:'Fin fin båt'   , 
thumbnail:'https://cdn2.rcstatic.com/images/car_images/new_images/peugeot/108_lrg.jpg'
},

    ],
    sum:0
}



/*const reducer = (state= initialState,action) =>{
    /*console.log('Reducer running',action)
    switch(action.type){
case constants.INPUT_CHANGE:
     return Object.assign({},state,{inputValue:action.text});
   
case constants.CHANGE_iNPUT_TEXT:
     return Object.assign({},state,{inputText:action.text});
     case constants.DELETE_INPUT:
     return Object.assign({},state,{inputValue:""});
case constants.ADD_ITEM:
return Object.assign({},state,{items:state.items.concat(state.inputText),inputText:''});
case constants.DELETE_ITEM:
console.log('Hit the reduser')
//Kopierer state.items arrayen over i copyOfItems
const copyOfItems =state.items.slice();
//tar vekk den valgte index plassen
copyOfItems.splice(action.index,1);
//lager en ny state
return Object.assign({},state,{items:copyOfItems});
     default: return state;
    }
return state;
}*/
const allReducers=combineReducers({
    navn:navnReducer
   
});

const store = createStore(allReducers,initialState);

export default store;