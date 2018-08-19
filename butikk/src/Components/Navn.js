import React from 'react';
import {connect }from 'react-redux';


function Navn (props){
  return (
    <div>
     <form>
<div className="form-group">
    <label >Navn </label>
    <input type="text" 
    className="form-control" 
    placeholder="Navn"
    value={props.navn}
    onChange={props.inputChangeNavn}
    />
   
  </div>
  <div className="form-group">
    <label >Adresse</label>
    <input type="text" 
    className="form-control"  
    placeholder="Adresse"
    value={props.adresse}
    onChange={props.inputChangeADR}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
      </form> 
    </div>
  )
}

function mapStateToProps(state){
  return{
navn:state.navn,
adresse:state.adresse
  }
}

function mapDispatchToProps(dispatch){
  return{
    inputChangeNavn:(evt)=>{
      const action={
        type:'KUNDE_INFO_NAVN',
        payload:evt.target.value}
        dispatch(action);
      
      
    },


    inputChangeADR:(evt)=>{
      const action={
        type:'KUNDE_INFO_ADR',
        payload:evt.target.value}
        dispatch(action)
      }
    }


  }



export default connect (mapStateToProps,mapDispatchToProps)(Navn);