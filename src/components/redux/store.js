import { configureStore } from '@reduxjs/toolkit';
// import persistStore from 'redux-persist/es/persistStore';
// import { persistSliceReducer } from './slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { phoneBookApi } from './query';
import { filterReducer } from './slice';

export const appStore = configureStore({
  reducer: {
    // phonebook: persistSliceReducer,
    filter: filterReducer,
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(phoneBookApi.middleware),
});
setupListeners(appStore.dispatch);

// export const persistor = persistStore(appStore);
