import { Types } from "../types/types";

const initialState = {
  notification: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.uiAddNotification:
      return ({
        ...state,
        notification: true 
      });

    case Types.uiDeleteNotification:
      return ({
        ...state,
        notification: false
      });
  
    default:
      return state;
  }
}