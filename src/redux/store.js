import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import transReducer from './transactions/trans-reducer';
import authReducer from './auth/auth-slice';
import transReducer from './transactions/trans-slice';
import balanceReducer from './balance/balance-slice';

const authPersistConfig = { key: 'auth', storage, whitelist: ['token'] };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transReducer,
    userBalance: balanceReducer,
  },
  //middlewares,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
