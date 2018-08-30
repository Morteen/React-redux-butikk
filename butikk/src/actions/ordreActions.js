export const delProd=(index)=>{
    console.log("Du trykte på slett ".index);
    
    
    return{
        
        type:'DEL_ITEM',
        payload:index
        
    }
    };