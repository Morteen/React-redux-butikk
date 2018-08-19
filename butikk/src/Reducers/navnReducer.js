
const initialState={ navn:'',
adresse:'Skien'}
export default function (state=initialState,action) {
    console.log("NavnReduser",action)
    switch(action.type){
        case 'KUNDE_SUBMIT':
        state={
            ...state,
            navn:'Gry',//action.payload.navn,
            adresse:'Porsgrunn'//action.payload.adresse
        }
        break;
        default:
        return state;
      
         
        
    }

 
}