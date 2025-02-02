// lastMessageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the state
interface LastMessageState {
  lastMessage: string; // Store the last message
}

// Initial state
const initialState: LastMessageState = {
  lastMessage: '', // Initially, no message
};

// Create the slice using Redux Toolkit
const lastMessageSlice = createSlice({
  name: 'lastMessage',
  initialState,
  reducers: {
    // Action to set last message
    setLastMessage: (
      state,
      action: PayloadAction<{ lastMessage: string }>
    ) => {
      const { lastMessage } = action.payload;
      state.lastMessage = lastMessage;  // Update the last message
    },
  },
});

// Export the action created by createSlice
export const { setLastMessage } = lastMessageSlice.actions;

// Export the reducer to be added to the store
export default lastMessageSlice.reducer;
