// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   greeting: '',
//   loading: true,

// };

// const url = 'http://127.0.0.1:3000/api/random_gretting';

// export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
//   const response = await axios.get(url);
//   return response.data;
// });

// const greetingSlice = createSlice({
//   name: 'greeting',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchGreeting.pending]: (state) => {
//       state.loading = true;
//     },
//     [fetchGreeting.fulfilled]: (state, action) => {
//       state.greeting = action.payload;
//       state.loading = false;
//     },
//     [fetchGreeting.rejected]: (state) => {
//       state.loading = false;
//       state.greeting = 'there is a problem reaching the API please try again later';
//     },
//   },
// });

// export default greetingSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  loading: true,
};

const url = 'http://127.0.0.1:3000/api/random_gretting';

export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await axios.get(url);
  return response.data;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchGreeting.fulfilled, (state, action) => ({
        ...state,
        greeting: action.payload,
        loading: false,
      }))
      .addCase(fetchGreeting.rejected, (state) => ({
        ...state,
        loading: false,
        greeting: 'there is a problem reaching the API please try again later',
      }));
  },
});

export default greetingSlice.reducer;
