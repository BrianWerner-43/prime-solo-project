

const initialState = {
  id: null,
  username: null,
  isGuest: false
}


// Added functionality to have a guest be able to use the app
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...action.payload, isGuest: false};
    case 'UNSET_USER':
      return initialState;
    case 'SET_GUEST_USER':
      return {id: null, username: 'Guest', isGuest: true};
    default:
      return state;
  }
};

export default userReducer;
