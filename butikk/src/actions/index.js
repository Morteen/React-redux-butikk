export const addKunde=(navn,adresse)=>{
console.log("Du trykte på submit", navn);
const kunde={
    navn:navn,
    adresse:adresse
}
console.log("Log av kunde i addKunde ", kunde.navn);
return{
    
    type:'KUNDE_SUBMIT',
    payload:kunde
}
};
