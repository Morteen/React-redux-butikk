import React, { Component } from 'react'

import  {connect }from 'react-redux';
import PropTypes from 'prop-types';


 class NavnForm extends Component {
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
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const kunde={
            navn:this.state.navn,
            adresse:this.state.adresse
        };
        console.log("Fra postForm onSubmit "+kunde.navn+"  "+kunde.adresse)
        //call action
        //this.props.createKunde(kunde)
       // props.onBtnClick(e);
       
       
    }
  render() {
    return (
      <div>
        <h1>Legg inn navn</h1>
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
NavnForm.propTypes={
    createKunde:PropTypes.func.isRequired
}

export default connect(null)(NavnForm)
