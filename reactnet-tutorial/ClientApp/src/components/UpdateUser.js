import React, { Component } from 'react';
import { updateUser } from '../functions/DummyServices';
import { TextBox } from './TextBox';
export class UpdateUser extends Component {

  constructor(props) {
    super(props);
    this.user = props.user;
  }
  update() {
    this.setState({isLoading:true});
    updateUser(this.user).then(response => {
      this.close();
      this.user = {};
      console.log(response);
      this.setState({isLoading:false});
    }).catch(e => console.error(e));
  }

  close() {
    console.log(this.props)
    this.props.callBack(this.user);
  }

  render() {
    return (
      <div>
        <h1>Update User</h1>

        <p>This is a simple example of a React component. Update data to database by EF</p>
        
        <TextBox label="Name" callBack={(data) => this.user.Name = data} defaultValue={this.user.name}/>
        <TextBox label="Surname" callBack={(data) => this.user.Surname = data} defaultValue={this.user.surname}/>
        <TextBox label="Identity Number" callBack={(data) => this.user.IdentityNumber = data} defaultValue={this.user.identityNumber}/>
        <TextBox label="User Name" callBack={(data) => this.user.UserName = data} defaultValue={this.user.userName}/>
        <TextBox label="Password" callBack={(data) => this.user.Password = data} defaultValue={this.user.password}/>
        <TextBox label="PhoneNumber" callBack={(data) => this.user.PhoneNumber = data} defaultValue={this.user.phoneNumber}/>
    <button className="btn btn-primary" onClick={() => this.update()}>Update!</button>
    <button className="btn btn-danger" onClick={() => this.close()}>Close!</button>
      </div>
    );
  }
}
