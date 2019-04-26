// ACTION CRETORS //
// export const selectPost = (post) => ({ type: 'SELECT_CASE', payload: post })
const loadPosts = (posts) => ({ type: 'LOAD_CASES', payload: posts })
export const removePost = (id) => ({ type: 'REMOVE_CASE', payload: id})

// THUNK CRETORS //
export const getPosts = () => (dispatch) => {
    return fetch("http://localhost:3000/api/v1/posts")
      .then(resp => resp.json())
      .then(posts => dispatch(loadPosts(posts)))
}

// export const patchPost = () => {
// }

// export const deletePost = (id) => (dispatch) => {
//   return fetch(`http://localhost:3000/api/v1/posts/${id}`, {
//     method: 'DELETE'
//   })
//     .then(resp => resp.json())
//     .then(post => dispatch(removePost(post.id)))
// }
