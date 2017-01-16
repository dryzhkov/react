import React from 'react';
import {ListItem, Avatar} from 'material-ui';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <ListItem
        leftAvatar={<Avatar src={this.props.message.profilePic} />}>
        {this.props.message.message}
        <div style={{
          color: '#AAA',
          fontSize: '9pt',
          textAlign: 'right'
        }}>Sent on: {this.props.message.date}</div>
      </ListItem>
    );
  }
}

export default Message;