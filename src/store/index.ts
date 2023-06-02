import { configureStore } from "@reduxjs/toolkit";
import * as serviceApi from "src/common/services/service";
import catReducer from "src/store/reducers/cat.reducer";

const store = configureStore({
  reducer: {
    catReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: serviceApi
      }
    })
});

export type ServiceType = typeof serviceApi;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
