const initialState = {
  all: []
}

const postReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'SAVE_POSTS_TO_STATE':
      return {...state, all: action.payload}

    case 'POST_NEW_CASE':
      return {...state, post: action.payload}

    // case 'REMOVE_CASE':

    default:
      return state;

  }
}


export default postReducer;
