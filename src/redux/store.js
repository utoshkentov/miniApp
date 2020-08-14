import {applyMiddleware, createStore} from "redux";
import rootReducer from "./rootReducer";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export const persistor = persistStore(store);