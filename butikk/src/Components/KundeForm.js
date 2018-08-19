import React, { Component } from 'react'
import  {connect }from 'react-redux';
import PropTypes from 'prop-types';
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
        ///this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const kunde={
            navn:this.state.navn,
            body:this.state.adresse
        };
        console.log("Fra postForm onsubmit "+kunde.title+"  "+kunde.adresse)
        //call action
        this.props.addKunde(kunde)
       
    }
  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
            <div>  
            <label className="primary">Navn</label><br/>
            <input 
            type='text'
            name='navn'
            value={this.state.navn}
            onChange={this.onChange}/>
            </div>
            <div>  
            <label className="primary">Adresse</label><br/>
            <input 
            type='text'
            name='adresse'
            value={this.state.adresse}
            onChange={this.onChange}/>
            </div>
            <br/>
            <button className="primary" type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}



const matchDispatchToProps = dispatch => {
    return bindActionCreators({addKunde:addKunde}, dispatch)
    

  }


export default connect(null,matchDispatchToProps)(KundeForm)
