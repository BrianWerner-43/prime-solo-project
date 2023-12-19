// const initialState = {
//   loggedIn: false,
//   user: {}
// }
// Added functionality to have a guest be able to use the app
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
      // return {
      //   loggedIn: true,
      //   user: action.payload
      // }
    case 'UNSET_USER':
      return {}
      // return {
      //   loggedIn: false,
      //   user: {}
      // };
    // case 'SET_GUEST_USER':
    //   return {
    //     loggedIn: false,
    //     user: action.payload
    //   }
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userReducer;
