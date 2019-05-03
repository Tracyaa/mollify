///////USER ACTIONS///////

const saveUserToState = (userObj) => {
  return {type: "SAVE_USER_TO_STATE", payload: userObj}
}

const saveTokenToState = (token) => {
  return {type: "SAVE_TOKEN_TO_STATE", payload: token}
}

const updateUserPostInfoToState = (user) => {
  return {type: "UPDATE_USER_POST_INFO_TO_STATE", payload: user}
}

const setUserToState = (user) => {
  return {type: "SET_USER_TO_STATE", payload: user}
}

export const patchUserInfo = (user) => {
  const updatedUser = {...user, has_a_post: !user.has_a_post}
  return (dispatch) =>{
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(userObj => dispatch(updateUserPostInfoToState(userObj)))
  }
}

export const fetchCurrentUser = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/current_user", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('jwt')
      }
    })
    .then(res => res.json())
    .then(userObj => {
      dispatch(setUserToState(userObj))
    })
  }
}

export const fetchSignup = (userObj) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userObj)
    })
  }
}

export const fetchLogIn = (userObj, push) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(resp => resp.json())
    .then((information) => {
      if (information.jwt) {
        dispatch(saveUserToState(information.user))
        dispatch(saveTokenToState(information.jwt))
        localStorage.setItem("jwt", information.jwt)
        push("/")
        // localStorage.setItem('user', JSON.stringify(information.user));
        // JSON.parse(localStorage.getItem('user'));
      } else {
        push("/login")
      }
    })
  }
}

export const removeUserFromState = () => {
  return {type: "REMOVE_USER_FROM_STATE"}
}

///////////////////////////////////////

////////STUDENT POST situations////////

///////////////////////////////////////

const savePostsToState = (posts) => {
  return {type: "SAVE_POSTS_TO_STATE", payload: posts}
}

const patchPostToState = (post) => {
  return {type: "PATCH_POST_TO_STATE", payload: post}
}

const savePostToState = (post) => {
  return {type: "POST_NEW_POST_TO_STATE", payload: post}
}

export const fetchPosts = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/posts")
    .then(resp => resp.json())
    .then(posts => dispatch(savePostsToState(posts)))
  }
}

export const postPost = (postObj) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(postObj)
    })
    .then(resp => resp.json())
    .then(post => dispatch(savePostToState(post)))
  }
}

export const patchPost = (id, postObj) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/posts/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(postObj)
    })
    .then(resp => resp.json())
    .then(post => dispatch(patchPostToState(post)))
  }
}

////////////////////////////////////////

////////COUNSELOR OPEN inquiries////////

////////////////////////////////////////

const savePostToUser = (post) => {
  return {type: "SAVE_POST_TO_USER", payload: post}
}

export const fetchPost = (postID, token) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/${postID}/buy`, {
      method: "POST",
      headers: {"Authorization": token}
    })
    .then(resp => resp.json())
    .then(post => {
      if (!post.message) {
        dispatch(savePostToUser(post))
      }
    })
  }
}
