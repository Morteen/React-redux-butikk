
const initialState={ navn:'',
adresse:'Skien'}
export default function (state=initialState,action) {
    console.log("NavnReduser",action)
    switch(action.type){
        case 'KUNDE_INFO_NAVN':
        console.log('action KUNDE_INFO_NAVN virker',state.navn)
      state={
          ...state,
          navn:action.payload.navn
      }
      break;
        
        case 'KUNDE_INFO_ADR':
        console.log('action KUNDE_INFO_adrs virker')
        state={
            ...state,
            adresse:action.payload.adresse
        }
        break;
        case 'KUNDE_SUBMIT':
        state={
            ...state,
            navn:action.payload.navn,
            adresse:action.payload.adresse
        }
        break;
      
        
        
default:
return state;
        
    }

 
}