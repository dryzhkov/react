import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let MessageSource = {
  getMessages: {
    remote(state) {

      if(firebaseRef){
        firebaseRef.off();
      }
      firebaseRef = Firebase.database().ref(`messages/${state.selectedChannel.key}`);
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (dataSnapshot) => {
          var messages = dataSnapshot.val();
          resolve(messages);


          setTimeout(()=> {
            firebaseRef.on("child_added", ((msg) => {
              let msgVal = msg.val();
              msgVal.key = msg.key;
              Actions.messageReceived(msgVal);
            }));
          }, 10);

        })
      });
    },
    success: Actions.messagesReceived,
    error: Actions.messagesFailed,
    loading: Actions.messagesLoading
  },
  sendMessage: {
    remote(state){
      return new Promise((resolve, reject)=> {
        if(!firebaseRef){
          return reject('Unable to send messages. Try again.');
        }

        firebaseRef.push({
          "message": state.message,
          "date": new Date().toUTCString(),
          "author": state.user.photoURL,
          "userId": state.user.uid,
          "profilePic": state.user.photoURL
        });
        resolve();
      });
    },
    success: Actions.messageSendSuccess,
    error: Actions.messageSendError
  },
}

export default MessageSource;