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
        console.log('Onsubmit state verdier',this.state.navn+'  '+this.state.adresse)
                //call action
        this.props.addKunde(this.state.navn,this.state.adresse)
        this.setState({
            navn: '',
            adresse:''
          });
    }
  render() {
    return (
      <div>
        <h4>Legg inn navn og adresse</h4>
        <form onSubmit={this.onSubmit}>
            <div>  
            <label >Navn</label>
            <input 
            type='text'
            name='navn'
            value={this.state.navn}
            onChange={this.onChange}/>
            </div>
            <div>  
            <label ><h6>Adresse</h6></label><br/>
            <input 
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
