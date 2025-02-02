import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import lastMessageReducer from '../chat/chatSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    lastMessage: lastMessageReducer,
  },
});

export default store;
