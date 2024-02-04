import { compose, createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["user"],
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk, you can use only one async middleware
  sagaMiddleware,
].filter(Boolean);

// const middleWares = [customLogger];
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
