import React, { Component } from "react";
import { CreateUser } from "./CreateUser";
import { UserList } from "./UserList";
import { UserTelephones } from "./UserTelephones";

export class PlayGround extends Component {

    
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
    <UserList/>
    <div style={{height:'50px'}}></div>
    <UserTelephones/>
    <div style={{height:'50px'}}></div>
    <CreateUser/>
    </div>);
  }
}