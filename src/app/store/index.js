import { configureStore } from '@reduxjs/toolkit';
import dataPersistedSlice from './dataPersistedSlice';
import dataSlice from './dataSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, dataPersistedSlice);

export const store = configureStore({
  reducer: {
    dataPersist: persistedReducer,
    dataUser: dataSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export const persistor = persistStore(store);