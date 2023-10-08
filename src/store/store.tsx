import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardApi } from "../services/card";
import cardReducer from './card/CardSlice'
const rootReducer = combineReducers({
  cardReducer,
  [cardApi.reducerPath]: cardApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(cardApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
//export type FetchBaseQueryMeta = { request: Request; response?: Response };