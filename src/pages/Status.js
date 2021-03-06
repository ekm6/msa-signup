import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase"
import {deserialize} from "../helpers/serialize"
export default class Status extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: auth().currentUser,
        registeredPlayers: [],
        day: '',
        readError: null,
        writeError: null
      };
    }

    async componentDidMount() {
      this.setState({ readError: null });
      try {
        db.ref("players").on("value", snapshot => {
          let chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });
          this.setState({ chats });
        });
      } catch (error) {
        this.setState({ readError: error.message });
      }
    }

    render() {
      return (
        <div>
          <div className="chats">
            <h1>{deserialize(this.props.match.params.date)}</h1>
            {this.state.registeredPlayers.map(chat => {
              return <p key={chat.timestamp}>{chat.content}</p>
            })}
          </div>
          <div>
            Login in as: <strong>{this.state.user.email}</strong>
          </div>
        </div>
      );
    }
}