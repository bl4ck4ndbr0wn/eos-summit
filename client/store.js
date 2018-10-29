import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const configStore = () => {
  const middlewares = [thunk];
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

export default configStore;
