import alt from '../alt';
import Firebase from '../firebase';
import firebase from 'firebase';
class Actions {
  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed',
      'messagesReceived',
      'messagesFailed',
      'channelOpened',
      'messagesLoading',
      'sendMessage',
      'messageSendSuccess',
      'messageSendError',
      'messageReceived'
    );
  }

  login(router) {
    return (dispatch) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      const firebaseAuthRef = Firebase.auth();
      firebaseAuthRef.signInWithPopup(provider).then(result => {
        dispatch(result.user);

        router.transitionTo('/chat');
      }).catch(error => {
        console.log(error);
      });
    };
  }
}

export default alt.createActions(Actions);