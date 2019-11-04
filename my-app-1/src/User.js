import React, { Component } from 'react'
class User extends Component {
    render() {
        if (this.props.name && this.props.email && this.props.photo){
            return (
                <div>
                    <img src={ this.props.photo } />
                    <br/>
                    <span>Nome: { this.props.name }</span>
                    <br></br>
                    <span>Email: { this.props.email }</span>
                </div>
            )
        }else{
            return (
                <div>Precisa setar Nome|Email|Photo</div>
            )
        }
    }
  }
  
  export default User;