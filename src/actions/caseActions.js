// ACTION CRETORS //
const loadCases = (cases) => ({ type: 'LOAD_CASES', payload: cases })
export const removeCase = (id) => ({ type: 'REMOVE_CASE', payload: id})


// THUNK CRETORS //
export const getCases = () => {
  return (dispatch) => {
    return fetch(url)
      .then(resp => resp.json())
      .then(cases => dispatch(loadCases(cases)))
  }
}

export const patchCase = () => {

}

export const deleteCase = (id) => (dispatch) => {
  return fetch(`url/${id}`, {
    method: 'DELETE'
  })
    .then(resp => resp.json())
    .then(case => dispatch(removeCase(case.id)))
}







//
