import React, { Component } from 'react';
import  { fetchDataFromDataBase,deleteDataFromDataBase } from '../functions/DummyServices'
import  { trimStringFields } from '../functions/CommonFunctions'
import { UpdateUser } from './UpdateUser';
import './modal.css'

export class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = { userList: [], userListLoaded: false ,updateModalVisible: false };
    this.listUsers = this.listUsers.bind(this);
    this.closeUpdateModal = this.closeUpdateModal.bind(this);
  }

  listUsers(userList) {
    this.setState({
      userList: [...userList],
      userListLoaded: true,
      updateModalVisible: false
    });
  }

  async getUsers() {
      this.setState({userList: [], userListLoaded: false});
      var data = await fetchDataFromDataBase("GetUsers");
      data.forEach(user => {
        trimStringFields(user);
      });
      this.listUsers(data);
      console.table(data);
  }

  deleteById(userId) {
    deleteDataFromDataBase("DeleteUser",userId).then(data =>{
      if (data) {
        this.listUsers(this.state.userList?.filter(t => t.id != userId));
      }
    });
  }
  openUpdateModal(user) {
    this.user = user;
    this.setState({
      userList: this.state.userList,
      userListLoaded: true,
      updateModalVisible: true
    });
  }
  closeUpdateModal(result) {
    
    this.getUsers();
  }

  render() {
    return (
      <div>
        <h1>User List</h1>

        <p>This is a simple example of a React component. Fetch & delete data by EF</p>
        {this.state?.userListLoaded && <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Surname</th>
            <th>User Name</th>
            <th>Identity Number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.userList.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.userName}</td>
              <td>{user.identityNumber}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => this.deleteById(user.id)}>Delete!</button>
              </td>
              <td>
                <button className="btn btn-info btn-sm" onClick={() => this.openUpdateModal(user)}>Update!</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>}

      {
        this.state.updateModalVisible &&<div className='modal  display-block'>
            <div className='modal-main'>
            <UpdateUser callBack={this.closeUpdateModal} user={this.user}/>
            </div>
           </div>
      }
        
        

        <button className="btn btn-primary" onClick={() => this.getUsers()}>Fetch!</button>
      </div>
    );
  }
}
