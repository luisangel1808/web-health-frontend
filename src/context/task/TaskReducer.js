import { GET_TASKS, GET_TASK, CLEAR_TASK_SELECTED } from "../types";

const TaskReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_TASKS:
      console.log(payload);
      return {
        ...state,
        tasks: payload,
      };
    case GET_TASK:
      return {
        ...state,
        selectedTask: payload,
      };
    case CLEAR_TASK_SELECTED:
      return {
        ...state,
        selectedTask: null,
      };
    default:
      return state;
  }
};

export default TaskReducer;
