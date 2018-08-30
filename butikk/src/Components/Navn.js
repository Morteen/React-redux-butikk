import React from 'react';
import {connect }from 'react-redux';
import KundeForm from'./KundeForm'; 



function Navn (props){

  
  
  return (
    <div>
     <KundeForm/>
    </div>
  )
}


function mapStateToProps(state){
  console.log("Adresse log ",state)
  return{
fNavn:state.navnReducer.fNavn,
eNavn:state.navnReducer.eNavn,
adresse:state.navnReducer.adresse,
 
  }
}



  



 

export default connect (mapStateToProps)(Navn);