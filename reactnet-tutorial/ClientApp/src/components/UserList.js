import React, { Component } from 'react';

export class UserList extends Component {

  constructor(props) {
    super(props);
    this.state = { userList: [] };
    this.listUsers = this.listUsers.bind(this);
  }

  listUsers(userList) {
    this.setState({
      userList: [...userList]
    });
  }

  async fetchDataFromDataBase() {
      var res = await fetch("dummydata");
      var data = await res.json();
      this.listUsers(data);
      console.table(data);
  }

  render() {
    return (
      <div>
        <h1>User List</h1>

        <p>This is a simple example of a React component. Fetch data by EF</p>

        

        <button className="btn btn-primary" onClick={() => this.fetchDataFromDataBase()}>Fetch!</button>
      </div>
    );
  }
}
