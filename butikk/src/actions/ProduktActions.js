export const addProd= (Produkt)=>{
    console.log("Du trykte på kjøp", Produkt.id); 
    return{
    
        type:'ADD_PROD',
        payload:Produkt
    }
}
export function addSum(produkt) {
    return { 
        type: 'ADD_SUM', 
        payload:produkt.pris
    }
  }