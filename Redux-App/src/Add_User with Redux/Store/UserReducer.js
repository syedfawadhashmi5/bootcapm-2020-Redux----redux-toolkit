const initState = {
  user: [
    {
      id: "1",
      name: "humza",
      address: "karachi",
    },
  ],
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_USER': 
    return {user: [action.payload, ...state.user]}
    case 'DELETE_USER': 
    const newUsers = state.user.filter(user => user.id !== action.id)
    return {user: newUsers}
    default:  
    return state;
  }
};

export default userReducer;
