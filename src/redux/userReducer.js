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
      return { ...state, ...userObj }

    case "SET_USER_TO_STATE":
      let user = action.payload.user
      return {
        id: user.id,
        email: user.email,
        gender: user.gender,
        age: user.age,
        role: user.role,
        school: user.school,
        location: user.location,
        has_a_post: user.has_a_post,
        posts: user.user_posts,
        token: localStorage.getItem('jwt')
      }

    case "SAVE_TOKEN_TO_STATE":
    console.log(action.payload);
      return {...state, token: action.payload}

    case "UPDATE_USER_POST_INFO_TO_STATE":
    console.log(action.payload);
      return {
        ...action.payload
      };

    case "REMOVE_USER_FROM_STATE":
      localStorage.clear()
      // localStorage.removeItem('jwt')
      return {initialState}

    // case "SAVE_POST_TO_USER":
    //   return {
    //     ...state,
    //     posts: [...state.posts, action.payload]
    //   }

    default:
      return state;
  }
}

export default userReducer;
