const initialState = {
  posts: []
}

const postReducer = (postState = initialState, action) => {

  switch(action.type) {
    // console.log(postState, action)
    case 'LOAD_CASES':
      return {...postState, posts: action.payload}
    //
    // case 'EDIT_CASE':
    //
    // case 'REMOVE_CASE':

    default:
      return postState;

  }
}


export default postReducer;
