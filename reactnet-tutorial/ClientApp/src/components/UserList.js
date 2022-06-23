import React, { Component } from 'react';
import  { fetchDataFromDataBase,deleteDataFromDataBase } from '../functions/DummyServices'

export class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = { userList: [], userListLoaded: false };
    this.listUsers = this.listUsers.bind(this);
  }

  listUsers(userList) {
    this.setState({
      userList: [...userList],
      userListLoaded: true
    });
  }

  async getUsers() {
      this.setState({userList: [], userListLoaded: false});
      var data = await fetchDataFromDataBase("GetUsers");
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
            </tr>
          )}
        </tbody>
      </table>}
        
        

        <button className="btn btn-primary" onClick={() => this.getUsers()}>Fetch!</button>
      </div>
    );
  }
}
