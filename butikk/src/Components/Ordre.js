import React from 'react'
import {connect}from 'react-redux';

function Ordre(props){
     
  return (
    <div>
      <p>{props.navn}</p>
      <p>{props.adresse}</p>
      <ul>
          {props.ordreListe.map((prod,index)=>{
            return( <li key={index}>{prod.prodNavn}</li>) ;
            })}
          </ul>
          <p> Sum:{props.sum}</p>
    </div>
  ) }
 




const mapStateToProps = (state) => {
    console.log('mapStateToProps ordre',state.ordreReducer)
    return {
        navn:state.navnReducer.navn,
        adresse:state.navnReducer.adresse,
        sum:state.ordreReducer.sum,
        ordreListe:state.ordreReducer.ordreListe
    };
  };
export default connect(mapStateToProps)(Ordre)
