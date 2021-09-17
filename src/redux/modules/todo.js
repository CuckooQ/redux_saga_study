/* ACTION TYPES */
const ADD_TODO = "ADD_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETE = "SHOW_COMPLETE";

/* ACTION CREATORS */
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id,
  };
}
export function showAll() {
  return {
    type: SHOW_ALL,
  };
}
export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}

/* REDUCER */
const FILTER = {
  ALL: "ALL",
  COMPELTE: "COMPLETE",
};
const initState = {
  todoList: [],
  showingTodoList: [],
  filter: "ALL",
};
function reducer(prevState = initState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newState = { ...prevState };
      const todo = {
        id: newState.todoList.length,
        title: action.text,
        done: false,
      };
      newState.todoList = [...newState.todoList, todo];
      newState.showingTodoList = [...newState.todoList];
      newState.filter = FILTER.ALL;
      return newState;
    }
    case COMPLETE_TODO: {
      const newState = { ...prevState };
      const idx = newState.todoList.findIndex((todo) => todo.id === action.id);
      if (idx >= 0) {
        newState.todoList[idx].done = true;
        newState.showingTodoList = [...newState.todoList];
        newState.filter = FILTER.ALL;
      }
      return newState;
    }
    case SHOW_ALL: {
      const newState = { ...prevState };
      newState.filter = FILTER.ALL;
      newState.showingTodoList = [...newState.todoList];
      return newState;
    }
    case SHOW_COMPLETE: {
      const newState = { ...prevState };
      newState.filter = FILTER.COMPELTE;
      newState.showingTodoList = [
        ...newState.todoList.filter((todo) => todo.done === true),
      ];
      return newState;
    }
    default:
  }
  return prevState;
}

export default reducer;
