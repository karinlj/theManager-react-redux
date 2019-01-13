//initial state because no state at first
const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state, //current state
        authError: "Login failed" //generic error
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("sign out success");
      return state;
    default:
      return state;
  }
};
export default authReducer;
