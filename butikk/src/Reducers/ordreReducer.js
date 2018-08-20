
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
default:
return state;
}    
        


        
    }