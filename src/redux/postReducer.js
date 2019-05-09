const initialState = {
  all: []
}

const postReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'SAVE_POSTS_TO_STATE':
      return {all: action.payload}

    case 'POST_NEW_POST_TO_STATE':
      return {all: [...state.all, action.payload]}

    case 'PATCH_POST_TO_STATE':
      const patchedPosts = state.all.map(post => {
        if(post.id === action.payload.id) {
          return action.payload
        } else {
          return post
        }
      })
      return {
          all: patchedPosts
      }
    case 'DELETE_POST':
      const remainPosts = state.all.filter(post => post.id !== action.payload.id)
      return {all: remainPosts}

    default:
      return state;

  }
}


export default postReducer;
