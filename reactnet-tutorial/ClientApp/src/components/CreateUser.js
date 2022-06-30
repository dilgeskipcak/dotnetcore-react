import React, { Component } from 'react';
import { createUser } from '../functions/DummyServices';
import { TextBox } from './TextBox';
export class CreateUser extends Component {

  constructor(props) {
    super(props);
    this.user = {};
  }
  create() {
    this.setState({isLoading:true});
    createUser(this.user).then(response => {
      this.user = {};
      console.log(response);
      this.setState({isLoading:false});
    }).catch(e => console.error(e));
  }

  render() {
    return (
      <div>
        <h1>Create User</h1>

        <p>This is a simple example of a React component. Add data to database by EF</p>
        
        <TextBox label="Name" callBack={(data) => this.user.Name = data}/>
        <TextBox label="Surname" callBack={(data) => this.user.Surname = data}/>
        <TextBox label="Identity Number" callBack={(data) => this.user.IdentityNumber = data}/>
        <TextBox label="User Name" callBack={(data) => this.user.UserName = data}/>
        <TextBox label="Password" callBack={(data) => this.user.Password = data}/>
        <TextBox label="PhoneNumber" callBack={(data) => this.user.PhoneNumber = data}/>
    <button className="btn btn-primary" onClick={() => this.create()}>Create!</button>
      </div>
    );
  }
}
