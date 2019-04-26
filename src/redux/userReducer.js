let initialState = {
  id: "",
  username: "",
  money: 0,
  snacks: [],
  token: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_TO_STATE":
      let userObj = action.payload
      return {
        ...state,
        username: userObj.username,
        id: userObj.id,
        snacks: userObj.user_snacks,
        money: userObj.money
      }
    case "SAVE_TOKEN_TO_STATE":
      return {
        ...state,
        token: action.payload
      }
    case "SAVE_SNACK_TO_USER":
      return {
        ...state,
        snacks: [...state.snacks, action.payload ]
      }
    default:
      return state;
  }
}

export default userReducer
