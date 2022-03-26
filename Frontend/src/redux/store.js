import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
import productReducer from "./productRedux"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }


const persistedReducerOne = persistReducer(persistConfig, userReducer)
const persistedReducerTwo = persistReducer(persistConfig, productReducer)

// const rootReducer = combineReducers({
//   userReducer,
//   productReducer,
//   cartReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        user: persistedReducerOne,
        products: persistedReducerTwo,
    },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});
// export default () => {
//   const store = createStore(persistedReducer)
//   const persistor = persistStore(store)

//   return {store,persistor}
// }

export let persistor = persistStore(store);