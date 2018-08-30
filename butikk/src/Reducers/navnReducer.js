
const initialState={ 
    
    eNavn:'',
    fNavn:'',
    adresse:''
}
export default function (state=initialState,action) {
    console.log("NavnReduser",action)
    switch(action.type){
        case 'KUNDE_SUBMIT':
               
        return Object.assign({},state,{fNavn:action.payload.fNavn,eNavn:action.payload.eNavn,adresse:action.payload.adresse})
       
        
            default:
      return state;   
        
    }
    
 
}