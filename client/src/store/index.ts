import { combineReducers, configureStore } from '@reduxjs/toolkit';
import infoReducer from 'src/store/features/info/actions';

const rootReducer = combineReducers({
  infoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
