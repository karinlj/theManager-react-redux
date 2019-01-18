//action creator: createProject
export const createProject = project => {
  //init-project=title & content from CreateProject-component

  /*   return { what we normally do
    type: "ADD_PROJECT",
    project: project
  }; */
  //thunk lets us return a function
  //these packages (getFirebase, getFirestore) knows what to connect to because
  //we have passed in our config into the store enhansers (index.js)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //pausing the dispatch
    //make async call to database - takes some time to do
    const firestore = getFirestore(); //ref to our firestore db
    //ref to our projects collection & adding new document to it

    ///access to the profile obj
    //logged in-on the state-firebase-profile
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        /*  authorFirstName: "Mats",
        authorLastName: "Boss",
        authorId: 12345, */
        createAt: new Date()
      })
      //when the doc is added, THEN continue with the dispatch
      //then() takes a callback func that will fire when we have added it
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project: project
        });
      })
      //if there is an error
      //catch() takes a callback func that will fire when we recieve that error
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
}; //in authReducer: add a case to our switch

//action creator: deleteProject
export const deleteProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    //pausing the dispatch
    const firestore = getFirestore(); //ref to our firestore db

    firestore
      .collection("projects")
      .doc("project.id") //the doc?
      .delete()
      //when the doc is added, THEN continue with the dispatch
      //then() takes a callback func that will fire when we have added it
      .then(() => {
        dispatch({
          type: "DELETE_PROJECT"
        });
      })
      //if there is an error
      //catch() takes a callback func that will fire when we recieve that error
      .catch(err => {
        dispatch({ type: "DELETE_PROJECT_ERROR", err });
      });
  };
}; //in authReducer: add a case to our switch
