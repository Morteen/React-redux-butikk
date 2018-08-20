
const initialState={ 
    
    navn:'',
adresse:''}
export default function (state=initialState,action) {
    console.log("NavnReduser",action)
    switch(action.type){
        case 'KUNDE_SUBMIT':
        console.log('LOg fra navnReduser ',action.payload.navn)
        
        return Object.assign({},state,{navn:action.payload.navn,adresse:action.payload.adresse})
       
        
      
      default:
      return state;   
        
    }
    
 
}