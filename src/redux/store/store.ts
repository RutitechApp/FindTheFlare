import { createStore, applyMiddleware, combineReducers, Reducer } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { thunk } from "redux-thunk";
import homeReducer from "../reducer/homeReducer";

interface RootState {
  home: ReturnType<typeof homeReducer>;
}

const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage: AsyncStorage,
};

const allReducer = combineReducers({
  home: homeReducer,
});

const rootReducer: Reducer<RootState> = (state, action) => {
  return allReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export type { RootState };
