import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { thunk } from 'redux-thunk';
import homeReducer from '../reducer/homeReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const allReducer: any = combineReducers({
  home: homeReducer,
});

const rootReducer = (state: any, action: { type: string; paylod: any }) => {
  return allReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
