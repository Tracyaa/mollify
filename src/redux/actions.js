export const fetchPosts = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/posts")
    .then(res => res.json())
    .then(posts => dispatch(savePostsToState(posts)))
  }
}

export const savePostsToState = (posts) => {
  return {type: "SAVE_POSTS_TO_STATE", payload: posts}
}

// userObj = {username: "eric", password: "123"}
export const fetchLogIn = (userObj, push) => {
  return (dispatch) => {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then((information) => {
      if (information.jwt) {
        dispatch(saveUserToState(information.user))
        dispatch(saveTokenToState(information.jwt))
        localStorage.setItem("jwt", information.jwt)
        push("/profile")
      }
    })
  }
}

export const saveUserToState = (userObj) => {
  return {type: "SAVE_USER_TO_STATE", payload: userObj}
}

export const saveTokenToState = (token) => {
  return {type: "SAVE_TOKEN_TO_STATE", payload: token}
}

export const fetchPost = (postID, token) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/posts/${postID}/buy`, {
      method: "POST",
      headers: {"Authorization": token}
    })
    .then(res => res.json())
    .then(post => {
      if (!post.message) {
        dispatch(savePostToUser(post))
      }
    })
  }
}

export const savePostToUser = (post) => {
  return {type: "SAVE_POST_TO_USER", payload: post}
}
