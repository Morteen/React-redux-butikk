import React from 'react'
import {connect}from 'react-redux';

function Ordre(props){
     
  return (
    <div>
      <p>{props.navn}</p>
      <p>{props.adresse}</p>
      <ul>
          <li>produkt</li>
          <li>produkt</li>
          <li>produkt</li>
          </ul>
          <p> Sum:{props.sum}</p>
    </div>
  ) }
 




const mapStateToProps = (state) => {
    console.log('mapStateToProps',state)
    return {
        navn:state.navn,
        adresse:state.adresse,
        sum:state.sum
    };
  };
export default connect(mapStateToProps)(Ordre)
