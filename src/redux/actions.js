// const saveVideoRoomToState = (videoRoomObj) => {
//   return {type: "SAVE_VIDEO_ROOM_TO_STATE", payload: videoRoomObj}
// }
//
// const deleteVideoRoomToState = (videoRoomObj) => {
//   return {type: "SAVE_VIDEO_ROOM_TO_STATE", payload: videoRoomObj}
// }
//
// const key = '3137d1b0d526cff69a0fab9c482ee2cdc34fee1dbae73fd9e94257df35c287c4'
//
// export const postVideoRoom = () => {
//   return (dispatch) => {
//     fetch("https://api.daily.co/v1/rooms", {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'Authorization': 'Bearer 3137d1b0d526cff69a0fab9c482ee2cdc34fee1dbae73fd9e94257df35c287c4'
//       },
//       body: JSON.stringify({
//         'privacy': 'public',
//         'properties': {'max_participants': 1}
//       })
//     })
//     .then(resp => resp.json())
//   }
// }
//
// export const getVideoRoom = (roomName) => {
//   return (dispatch) => {
//     fetch(`https://api.daily.co/v1/rooms/${roomName}`, {
//       method: 'GET',
//       headers: {
//         'Authorization': 'Bearer 3137d1b0d526cff69a0fab9c482ee2cdc34fee1dbae73fd9e94257df35c287c4',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(resp => resp.json())
//   }
// }
//
// export const deleteVideoRoom = (roomName) => {
//   return (dispatch) => {
//     fetch(`https://api.daily.co/v1/rooms/${roomName}`, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': 'Bearer 3137d1b0d526cff69a0fab9c482ee2cdc34fee1dbae73fd9e94257df35c287c4'
//       }
//     })
//     .then(resp => resp.json())
//   }
// }

const hostName = "https://mollify-api.herokuapp.com/"
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
    fetch(`${hostName}api/v1/users/${user.id}`, {
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
    fetch(`${hostName}api/v1/current_user`, {
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
    fetch(`${hostName}api/v1/users`, {
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
    fetch(`${hostName}api/v1/login`, {
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
const removePostFromState = (post) => {
  return {type: "DELETE_POST", payload: post}
}

export const fetchPosts = () => {
  return (dispatch) => {
    fetch(`${hostName}api/v1/posts`)
    .then(resp => resp.json())
    .then(posts => dispatch(savePostsToState(posts)))
  }
}

export const postPost = (postObj) => {
  return (dispatch) => {
    fetch(`${hostName}api/v1/posts`, {
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
    fetch(`${hostName}api/v1/posts/${id}`, {
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

export const deletePost = (postId) => {
  return (dispatch) => {
    fetch(`${hostName}api/v1/posts/${postId}`, {method: 'DELETE'})
      .then(resp => resp.json())
      .then(post => dispatch(removePostFromState(post)))
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
    fetch(`${hostName}posts/${postID}/buy`, {
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

//////
