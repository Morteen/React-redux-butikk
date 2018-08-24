import React from 'react'
import {connect}from 'react-redux';

function Ordre(props){


  //Test


  const produktTypes =props.ordreListe
    .map(ordreItem => ordreItem.prodNavn) // get all media types
    .filter((prodNavn, index, array) => array.indexOf(prodNavn) === index), // filter out duplicates

   counts =produktTypes
    .map(prodType => ({
      type: prodType,
      count: props.ordreListe.filter(item => item.prodNavn === prodType).length
    }));
console.log(" Test av metoder ",counts);

//Test ferdig
     
  return (
    <div>
      <h4>Ordre</h4>
      <p>{props.navn}</p>
      <p>{props.adresse}</p>

      <table className="table table-striped">
        <thead>
          <tr>
            <td><h6> Produkt navn</h6></td>
            <td></td>
            <td>Antall</td>
            <td></td>
            <td>Slett </td>
          </tr>
        </thead>
         
{counts.map((prod,index)=>{
  return(<tr> <td key={index}>{prod.type}</td> <td></td> <td> {prod.count}</td><td></td><td><button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button></td></tr>) ;
  })}
  
      </table>
      
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
