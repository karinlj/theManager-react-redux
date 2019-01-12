export const createProject = project => {
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
    //ref to our projects collection & adding new document
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Mats",
        authorLastName: "Boss",
        authorId: 12345,
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
};
