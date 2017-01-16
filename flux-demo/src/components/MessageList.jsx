import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

const {Card, List, CircularProgress} = mui;

@connectToStores
class MessageList extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    let messageNodes;

    if (!this.props.messagesLoading) {
      messageNodes = _.values(this.props.messages).map((message, i)=> {
        return (
          <Message message={message} key={i} />
        );
      });
    } else {
      messageNodes = <CircularProgress mode="indeterminate"
        style={{
          paddingTop: 20,
          paddingBottom: 20,
          margin: '0 auto',
          display: 'block',
          width: '60px'
        }} />;
    }

    return (
      <Card style={{
        flexGrow: 2,
        marginLeft: 10
      }}>
        <List>
          {messageNodes}
        </List>
      </Card>
    );
  }
}

export default MessageList;