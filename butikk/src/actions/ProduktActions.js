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
 export function decrementAntall(id) {
      console.log("Decrement funksjonen kjører")
    return { 
        type: 'DECREMENT_ANT', 
        payload:id
    }
  }
  export function setProdukter(produkter){
      return{
          type:'SET_PRODUKTER',
          produkter
      }
  }
  export  function getProdukter(){
    return dispatch=>{
        fetch("http://http://localhost:4000/visProdukter")
        .then(res=>res.json())
        .then(data => dispatch(setProdukter(data.produkter)));
        console.log('DATA hentet fra basen')
       
    }
}