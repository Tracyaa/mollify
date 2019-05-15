let initialState = {
  id: "",
  name: "",
  email: "",
  gender: "",
  rating: [],
  age: "",
  role: "",
  title: "",
  school: "",
  img_url: "",
  location: "",
  bio: "",
  has_a_post: "",
  posts: [],
  token: ""
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SAVE_USER_TO_STATE":
      let userObj = action.payload
      console.log(userObj);
      return { ...state, ...userObj }

    case "SET_USER_TO_STATE":
      let user = action.payload.user
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        rating: user.rating,
        gender: user.gender,
        age: user.age,
        title: user.title,
        role: user.role,
        school: user.school,
        img_url: user.img_url,
        location: user.location,
        bio: user.bio,
        has_a_post: user.has_a_post,
        posts: user.user_posts,
        token: localStorage.getItem('jwt')
      }

    case "SAVE_TOKEN_TO_STATE":
      return {...state, token: action.payload}

    case "UPDATE_USER_POST_INFO_TO_STATE":
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
