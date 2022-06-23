import React, { Component } from 'react';
import  { fetchDataFromDataBase, deleteDataFromDataBase } from '../functions/DummyServices'


export class UserTelephones extends Component {

  constructor(props) {
    super(props);
  }

  listTelephones(userTelephones) {
    this.setState({
      userTelephones: [...userTelephones],
      userTelephonesLoaded: true
    });
  }

  async getTelephones() {
      this.setState({userTelephones: [], userTelephonesLoaded: false});
      var data = await fetchDataFromDataBase("GetTelephones");
      this.listTelephones(data);
  }

  deleteById(telephoneId) {
    deleteDataFromDataBase("DeleteTelephone",telephoneId).then(data =>{
      if (data) {
        this.listTelephones(this.state.userTelephones?.filter(t => t.id != telephoneId));
      }
    })
  }

  render() {
    return (
      <div>
        <h1>User Telephones</h1>

        <p>This is a simple example of a React component. Fetch & delete data by EF</p>
        {this.state?.userTelephonesLoaded && <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Id</th>
            <th>Phone Number</th>
            <th>User Id</th>
            <th>Is Active?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.userTelephones.map(telephone =>
            <tr key={telephone.id}>
              <td>{telephone.id}</td>
              <td>{telephone.phoneNumber}</td>
              <td>{telephone.userId}</td>
              <td>{telephone.isActive ? "Yes" : "No"}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => this.deleteById(telephone.id)}>Delete!</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>}
        
        

        <button className="btn btn-primary" onClick={() => this.getTelephones()}>Fetch!</button>
      </div>
    );
  }
}
