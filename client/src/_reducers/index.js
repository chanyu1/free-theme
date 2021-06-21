import { combineReducers } from "redux";
import userReducer from "./user_reducer";

export default combineReducers({
  user: userReducer,
});

// const rootReducer = combineReducers({
//   user,
// });

// export default rootReducer;
