import { createStore } from "redux";
import { productReducer } from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = createStore(
  productReducer,
  applyMiddleware(thunk, logger)
);
