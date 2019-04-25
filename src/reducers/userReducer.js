const initialState = []

const userReducer = (userState = initialState, action) => {

  switch(action.type) {
    // console.log(caseState, action)
    case 'LOAD_USERS':
      return action.payload

    case 'EDIT_USER':

    case 'REMOVE_USER':
      // const newCases = caseState.filter(case => case.id !== action.payload)
      // return newUser

    default:
      return userState;

  }
}


export default userReducer;
