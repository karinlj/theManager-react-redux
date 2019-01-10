export const createProject = project => {
  /*   return { what we normally do
    type: "ADD_PROJECT",
    project: project
  }; */
  //thunk lets us return a function
  return (dispatch, getState) => {
    //make async call to database
    //continue with the dispatch again
    dispatch({
      type: "CREATE_PROJECT",
      project: project
    });
  };
};
