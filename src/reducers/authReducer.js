const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
  userName: null
};

export default (state= INTIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
    return {...state, isSignedIn: true, userId: action.payload, userName: action.userName}
    case 'SIGN_OUT':
    return {...state, isSignedIn:false, userId: null, userName: null }
    default:
    return state;

  }
};
