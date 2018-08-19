

export default function (state=[],action) {
    console.log("NavnReduser",action)
    switch(action.type){
        case 'KUNDE_INFO_NAVN':
        console.log('action KUNDE_INFO_NAVN virker',state.navn)
        
        return Object.assign({},state,{navn:action.payload});
        
        case 'KUNDE_INFO_ADR':
        console.log('action KUNDE_INFO_adrs virker')
        return Object.assign({},state,{adresse:action.payload});
        
        
default:return state;
        
    }


}