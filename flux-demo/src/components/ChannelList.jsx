import React from 'react';
import {Card, List, CircularProgress} from 'material-ui';
import Channel from './Channel.jsx';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

@connectToStores
class ChannelList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      channels: null
    }
  }

  componentDidMount(){
    this.state.selectedChannel = this.props.params.channel;
    ChatStore.getChannels(this.state.selectedChannel);
  }

  componentWillReceiveProps(nextProps){
    if(this.state.selectedChannel != nextProps.params.channel){
      this.state.selectedChannel = nextProps.params.channel;
      ChatStore.getChannels(this.state.selectedChannel);
    }
  }

  static getStores() {
    return [ChatStore];
  }

  static getPropsFromStores() {
    return ChatStore.getState();
  }

  render() {
    if(!this.props.channels){
      return (
        <Card style={{
          flexGrow: 1
        }}>
          <CircularProgress
            mode="indeterminate"
            style={{
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
              display: 'block',
              width: '60px'
            }}
          />
        </Card>
      );
    }

    const channels = _(this.props.channels)
      .keys()
      .map((key) => {
        const channel = this.props.channels[key];
        return (
          <Channel channel={channel} />
        );
      })
      .value();

    return (
      <Card style={{
        flexGrow: 1
      }}>
        <List>
          {channels}
        </List>
      </Card>
    );
  }
}

export default ChannelList;