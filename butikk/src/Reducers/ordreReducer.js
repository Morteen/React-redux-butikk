
const initialState ={
    ordre:{
        prodNavn:'',
        pris:0,
    },
    ordreListe:[],
    sum:0
}

export default function (state=initialState,action) {
    console.log("ordreReduser",action)
    switch(action.type){
case 'ADD_PROD':
return Object.assign({},state,{ordreListe:state.ordreListe.concat(action.payload),sum:state.sum+action.payload.pris})
case  'DEL_ITEM':
//Kopierer state.ordreliste arrayen over i copyOfItems
const copyOfOrdreListe =state.ordreListe.slice();
//tar vekk den valgte index plassen
copyOfOrdreListe.splice(action.payload,1);
//lager en ny state
return Object.assign({},state,{sum:state.sum-state.ordreListe[action.payload].pris,ordreListe:copyOfOrdreListe});
default:
return state;
}    
        


        
    }