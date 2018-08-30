export const addKunde=(fNavn,eNavn,adresse)=>{
console.log("Du trykte på submit", fNavn);
const kunde={
    fNavn:fNavn,
    eNavn:eNavn,
    adresse:adresse
}
console.log("Log av kunde i addKunde ", kunde.fNavn);
return{
    
    type:'KUNDE_SUBMIT',
    payload:kunde
}
};
