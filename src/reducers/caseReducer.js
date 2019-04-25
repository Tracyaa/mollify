const initialState = []

const caseReducer = (caseState = initialState, action) => {

  switch(action.type) {
    // console.log(caseState, action)
    case 'LOAD_CASES':
      return action.payload

    case 'EDIT_CASE':

    case 'REMOVE_CASE':
      // const newCases = caseState.filter(case => case.id !== action.payload)
      // return newCases

    default:
      return caseState;

  }
}


export default caseReducer;
