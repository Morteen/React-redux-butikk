import React, { Component } from 'react';
import {connect}from 'react-redux';
import { bindActionCreators } from 'redux';
import {addProd,addSum,decrementAntall,getProdukter} from'../actions/ProduktActions';


class Produkter extends Component {
 constructor(props){
   super(props);
   produkter:[];
 }

     componentDidMount=()=>{
     this.props.getProdukter();
   }
   
render(){  
  return (
    <div>

      <table className="table table-striped">
      <thead>
    <tr >
      <th >Produkt bilde</th>
      <th scope="col">Navn</th>
      <th scope="col">Beskrivelse</th>
      <th scope="col">Pris</th>
      <th>Antall på lager</th>
      <th></th>
      
    </tr>
  </thead>
  {this.props.produkter.map(produkt=>{ 
   
          return( 
           <tbody  key={produkt.id}>
          <tr >
          <td >{<img src={produkt.thumbnail}width="50px" height="50px" alt="Produkt bilde" id='prodImg'/> }</td>
          <td >{produkt.prodNavn}</td>
          <td >{produkt.description}</td>
          <td > {produkt.pris}</td>
          <td>{produkt.antall}</td>
          <td>
            <button className="btn btn-success"
            onClick={()=>{this.props.addProd(produkt);this.props.decrementAntall(produkt.id)}}
         >Kjøp</button></td>
          </tr>
          </tbody> 
        );
      })}
      </table>
     
    </div>
  )
}

}


const mapStateToProps = (state) => {
    console.log('mapStateToProps produkter',state)
    return {
     produkter:state.produktReducer.produkter
    };
  };

  const matchDispatchToProps = dispatch => {
    return bindActionCreators({addProd:addProd,addSum:addSum,decrementAntall:decrementAntall,getProdukter:getProdukter}, dispatch)
    

  }

export default connect(mapStateToProps,matchDispatchToProps)(Produkter)
 

     
      