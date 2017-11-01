import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import { userInput } from './reducer'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Chat extends Component {

  constructor(){
      super()
      this.state = {
        message: '',
        canSend: true,
        username: 'U',
        noName: true
      }
  }

  handleMessage = (e) => {
    e.preventDefault();
    this.setState({message: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.noName){
        this.setState({username: this.state.message, noName: false})
    }
    this.setState({message: ''})
    if(this.state.message.length && !this.props.convoOver){
        this.props.sendMessage(this.state.message)
        
    }
  }

  render() {

    

    let messages = this.props.messages, alignment = "left", letter;
    return (
    <div>
      <div className="Chat">
        <ul>
            {messages.map((m, i)=> {
                m.user === 'Me' ? alignment = 'right' : alignment = 'left';
                m.user !== 'Me' ? letter = m.user[0] : letter = this.state.username[0];
                return (alignment === 'left' ? <li id={alignment}> <h1>{letter}</h1> {m.message.replace(/URNAME/i, this.state.username)} </li> :
                <li id={alignment}> {m.message} <h1>{letter}</h1> </li>)
            })}
        </ul>
        </div>
        <div className="Input">
            <form onSubmit={this.handleSubmit}>
                <TextField
                    hintText="type your message here"
                    onChange={this.handleMessage}
                    value={this.state.message}
                />
 
                <RaisedButton type="submit" label="send" primary={true} style={{margin: 12}}/>
            </form>
        </div>
      </div>
    );
  }
}

const propsToState = function (state) {
    return {
        messages: state.messages,
        convoOver: state.over
    }
}
const dispatchToProps = function (dispatch) {
    return {
        sendMessage(message) {
            dispatch(userInput(message))
        }
    }
};

export default connect(propsToState, dispatchToProps)(Chat);

