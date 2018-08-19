import React from 'react';
import {connect }from 'react-redux';
import NavnForm from './NavnForm'


function Navn (props){

  
  
  return (
    <div>
     <NavnForm/>
    </div>
  )
}
let kunde={
  navn:'Gry',
  adresse:'BØ'
}

function mapStateToProps(state){
  console.log("Adresse log ",state)
  return{
navn:state.navnReducer.navn,
adresse:state.navnReducer.adresse,
 
  }
}

/**<form>
<div className="form-group">
    <label >Navn </label>
    <input type="text" 
    className="form-control" 
    placeholder="Navn"
    value={props.navn}
   
    
    />
   
  </div>
  <div className="form-group">
    <label >Adresse</label>
    <input type="text" 
    className="form-control"  
    placeholder="Adresse"
    value={props.adresse}
    />
  </div>
  
  <button type="submit" className="btn btn-primary" onSubmit={props.onBtnClick}> Submit</button>
      </form>  */

  



 

export default connect (mapStateToProps)(Navn);