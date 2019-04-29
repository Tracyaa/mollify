let initialState = {
  id: "",
  email: "",
  gender: "",
  age: "",
  role: "",
  school: "",
  location: "",
  has_a_post: "",
  posts: [],
  token: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER_TO_STATE":
      let userObj = action.payload
      console.log(userObj);
      return {
        ...state,
        ...userObj
        // id: userObj.id,
        // email: userObj.email,
        // gender: userObj.gender,
        // age: userObj.age,
        // role: userObj.role,
        // school: userObj.school,
        // location: userObj.location,
        // has_a_post: userObj.has_a_post,
        // posts: userObj.user_posts
      }
    case "SAVE_TOKEN_TO_STATE":
      return {
        ...state,
        token: action.payload
      }
    case "SAVE_POST_TO_USER":
      return {
        ...state,
        posts: [...state.posts, action.payload ]
      }
    case "REMOVE_USER_FROM_STATE":
    localStorage.removeItem('jwt')
      return {
        initialState
      }
    default:
      return state;
  }
}

export default userReducer
