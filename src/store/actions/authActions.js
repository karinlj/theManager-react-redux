//action creator
export const signIn = credentials => {
  //takes in email and password
  //thunk lets us return a FUNCTION and PAUS the dispatch process
  //these packages (getFirebase) knows what to connect to because
  //we have passed in our config into the store enhansers (index.js)
  return (dispatch, getState, { getFirebase }) => {
    //initialise our firebase instance
    //to communicate with our project and sign the user in
    const firebase = getFirebase();

    //takes som time and returns a promise - use then()
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
        //if any errors
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

//action creator
export const signOut = () => {
  //returns a function
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    //then() takes a callback func that fires when this is complete
    firebase.auth().signOut().then(() => {
      //dispatch an action to say the signOut has been a success
      dispatch({ type: "SIGNOUT_SUCCESS" });
    });
  };
};
//in authReducer: add a case to our switch
