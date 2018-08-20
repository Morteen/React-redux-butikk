import React from 'react';
import {connect}from 'react-redux';
import { bindActionCreators } from 'redux';
import {addProd,addSum} from'../actions/ProduktActions'

function Produkter (props) {

   

  return (
    <div>
      <table className="table table-striped">
      <thead>
    <tr >
      <th scope="col">Produkt bilde</th>
      <th scope="col">Navn</th>
      <th scope="col">Beskrivelse</th>
      <th scope="col">pris</th>
      <th></th>
      <th></th>
      
    </tr>
  </thead>
  {props.produkter.map(produkt=>{ 
          return( 
          <tr key={produkt.id} >
          <td >{<img src={produkt.thumbnail}width="50px" height="50px" alt="Produkt bilde" id='prodImg'/> }</td>
          <td >{produkt.prodNavn}</td>
          <td >{produkt.description}</td>
          <td > {produkt.pris}</td>
          <td>

          </td>
          <td><button className="btn btn-succsess"
          onClick={()=>props.addProd(produkt)}
         
          >Kjøp</button></td>
          </tr>
        );
      })}
      </table>
     
      
    </div>
  )
}




const mapStateToProps = (state) => {
    console.log('mapStateToProps produkter',state)
    return {
      produkter:state.produktReducer.produkter
    };
  };

  const matchDispatchToProps = dispatch => {
    return bindActionCreators({addProd:addProd,addSum:addSum}, dispatch)
    

  }

export default connect(mapStateToProps,matchDispatchToProps)(Produkter)
 
