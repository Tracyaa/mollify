// ACTION CREATORS //
const loadUsers = (users) => ({ type: 'LOAD_USERS', payload: users })
export const removeUser = (id) => ({ type: 'REMOVE_USER', payload: id})


// THUNK CREATORS //
export const postUser = (user) => {
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/users", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(user => dispatch(loadUsers(user)))
  }
}

export const userLogIn = (userObj) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(resp => resp.json())

  }
}x

// export const getUsers = () => {
//   return (dispatch) => {
//     return fetch("http://localhost:3000/api/v1/users")
//       .then(resp => resp.json())
//       .then(users => dispatch(loadUsers(users)))
//   }
// }

export const patchUser = () => {

}

export const deleteUser = (id) => (dispatch) => {
  return fetch(`url/${id}`, {
    method: 'DELETE'
  })
    .then(resp => resp.json())
    .then(user => dispatch(removeUser(user.id)))
}







//
