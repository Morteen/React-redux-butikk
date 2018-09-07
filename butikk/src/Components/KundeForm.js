import React, { Component } from 'react'
import  {connect }from 'react-redux';
import {addKunde}from '../actions';
import { bindActionCreators } from 'redux';


 class KundeForm extends Component {
    constructor(props){
        super(props);
        this.state={
            navn:'',
            adresse:''
        }
        this.onChange= this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this)
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
        
    }
    onSubmit(e){
        e.preventDefault();
        console.log('Onsubmit state verdier',this.state.fNavn+'  '+this.state.adresse)
                //call action
        this.props.addKunde(this.state.fNavn,this.state.eNavn,this.state.adresse)
        this.setState({
            eNavn: '',
            fNavn:'',
            adresse:''
          });
    }
  render() {
    return (
      <div className='well well-lg'>
        <h4>Legg inn navn og adresse</h4>
        <form onSubmit={this.onSubmit}>


        

        <div className="form-group"> 
            <label > Fornavn</label>
            <input 
            className="form-control"
                        type='text'
            name='fNavn'
            value={this.state.fNavn}
            onChange={this.onChange}/>
              <label > Etternavn</label>
            <input 
            className="form-control"
            type='text'
            name='eNavn'
            value={this.state.eNavn}
            onChange={this.onChange}/>
            </div>


            <div className="form-group">
            <label >Adresse</label>
            <input 
             className="form-control"
            type='text'
            name='adresse'
            value={this.state.adresse}
            onChange={this.onChange}/>
            </div>
            <br/>
            <button className="btn btn-primary" type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}



const matchDispatchToProps = dispatch => {
    return bindActionCreators({addKunde:addKunde}, dispatch)
    

  }


export default connect(null,matchDispatchToProps)(KundeForm)
