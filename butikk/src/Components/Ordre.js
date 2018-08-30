import React from 'react'
import {connect}from 'react-redux';
import { bindActionCreators } from 'redux';
import {delProd} from '../actions/ordreActions';


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
     if(props.fNavn===''){
      return (
        <div className="well well-sm">
<h4>Legg inn navn og adresse</h4>
</div>
      );
     }
     else
  return (
    <div>
      <div className='well well-sm'>
      <h4>Din ordre</h4>
      </div>
      <p>{props.fNavn+' '}{props.eNavn}  </p>
      <p>{props.adresse}</p>

      <table className="table table-condensed">
        <thead>

          <tr>
            <td> Produkt navn</td>
            <td></td>
            <td>Antall</td>
            <td></td>
            <td>Slett </td>
          </tr>
        </thead>
        <tbody>        
{counts.map((prod,index)=>{
  return(
 
    <tr key={index}>
      <td key={index}>{prod.type}</td>
       <td></td> 
       <td> {prod.count}</td>
       <td></td>
       <td>
         <button type="button" 
         className="close" 
         aria-label="Close"
         onClick={()=>{props.delProd(index);console.log("Slett knapp i ordre virker")} }>
  <span aria-hidden="true">&times;</span>
</button>
</td>
</tr>

) ;
  })}
  
  </tbody>
      
         </table> 

    <div id="sumContainer">
      <div id="sumLabel">Sum</div>
      <div id="sum">{props.sum}</div>
    </div>





                







    </div>
  ) }
 

  
const mapStateToProps = (state) => {
    console.log('mapStateToProps ordre',state.ordreReducer)
    return {
        fNavn:state.navnReducer.fNavn,
        eNavn:state.navnReducer.eNavn,
        adresse:state.navnReducer.adresse,
        sum:state.ordreReducer.sum,
        ordreListe:state.ordreReducer.ordreListe
    };

  };

  const matchDispatchToProps = dispatch => {
    return bindActionCreators({delProd:delProd}, dispatch)
    

  }
export default connect(mapStateToProps,matchDispatchToProps)(Ordre)
