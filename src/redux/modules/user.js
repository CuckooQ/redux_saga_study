/* ACTION TYPES */
export const GET_USERS_START = "GET_USERS_START";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAIL = "GET_USERS_FAIL";

/* ACTION CREATORS */
export function getUsersStart() {
  return { type: GET_USERS_START };
}

export function getUsersSuccess(data) {
  return { type: GET_USERS_SUCCESS, data };
}

export function getUsersFail(error) {
  return { type: GET_USERS_FAIL, error };
}

/* REDUCER */
const initState = {
  userList: [],
  loading: false,
  error: null,
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    case GET_USERS_START: {
      const newState = { ...prevState };
      newState.userList = [];
      newState.loading = true;
      newState.error = null;
      return newState;
    }
    case GET_USERS_SUCCESS: {
      const newState = { ...prevState };
      newState.userList = action.data;
      newState.loading = false;
      newState.error = null;
      return newState;
    }
    case GET_USERS_FAIL: {
      const newState = { ...prevState };
      newState.userList = [];
      newState.loading = false;
      newState.error = action.error;
      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
