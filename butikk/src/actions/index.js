export const addKunde=(kunde)=>{
console.log("Du trykte på submit", kunde.navn);
return{
    type:'KUNDE_SUBMIT',
    payload:kunde
}
};