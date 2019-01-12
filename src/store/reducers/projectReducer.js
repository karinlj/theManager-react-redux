const initState = {
  //initial state because no state at first
  projects: [
    { id: 1, title: "My first project", content: "bla bla bla bla" },
    { id: 2, title: "My second project", content: "bla bla bla bla" },
    { id: 3, title: "My third project", content: "bla bla bla bla" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("created project error", action.err);
      return state;

    default:
      return state;
  }
};
export default projectReducer;
