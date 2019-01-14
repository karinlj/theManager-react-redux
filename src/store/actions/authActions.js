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

//action creator
//passing in newUser from the SignUp-component when calling this creator
export const signUp = newUser => {
  //returns a function
  //we use Firebase to sign a new user up using the auth-service
  //we use Firestore for db, and we want more user-info there(see set() below)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    //firebase.auth()
    firebase
      .auth()
      ///create new user
      .createUserWithEmailAndPassword(
        //the newUser-object passed in
        newUser.email,
        newUser.password
      )
      //resp-func is returning a promise
      .then(resp => {
        //create new collection
        //creating new document with the uid from the response

        //firestore db
        return firestore.collection("users").doc(resp.user.uid).set({
          //set new properties inside the doc
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          initials: newUser.firstName[0] + newUser.lastName[0]
        });
      })
      .then(() => {
        //dispatch an action saying the signUp was successful
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      //if both fails
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

//  console.log(firstName, lastName, initials);?????????

//handling the dispatches in the authReducer in the switch
