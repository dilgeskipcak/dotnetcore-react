import React, { Component } from 'react';
import { TextBox } from './TextBox';
export class CreateUser extends Component {

  constructor(props) {
    let user;
    super(props);
    this.user = {};
  }

  listTelephones(userTelephones) {
    this.setState({isLoading: false});
  }

  
  create() {
    this.setState({isLoading:true});
    console.log(this.user);
    this.user = {};
    this.setState({isLoading:false});
  }

  render() {
    console.log("rendered");
    return (
      <div>
        <h1>Create User</h1>

        <p>This is a simple example of a React component. Add data to database by EF</p>
        
        <TextBox label="Name" callBack={(data) => this.user.Name = data}/>
        <TextBox label="Surname" callBack={(data) => this.user.Surname = data}/>
        <TextBox label="Identity Number" callBack={(data) => this.user.IdentityNumber = data}/>
        <TextBox label="User Name" callBack={(data) => this.user.UserName = data}/>
        <TextBox label="Password" callBack={(data) => this.user.Password = data}/>
    <button className="btn btn-primary" onClick={() => this.create()}>Create!</button>
      </div>
    );
  }
}
