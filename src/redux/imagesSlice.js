import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchImg from '../service/apiService';
const initialState = {
  items: [],
  query:'',
  page: 1,
};


export const getImg = createAsyncThunk('items/getImg', async (_, { rejectWithValue, dispatch }) => {
  const res = await fetchImg('cat', 1);
  dispatch(setItems(res.hits))
})

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    setQuery(state, actions) {
      state.query = actions.payload;
    },
    setItems(state, actions) {
      state.items.push(actions.payload);
    },
  },
  extraReducers: {
    [getImg.pending]: () => {console.log('pending');},
    [getImg.fulfilled]: () => {console.log('fulfilled');},
    [getImg.rejected]: () => {console.log('rejected')},
  },
});


export const { incrementPage, setQuery,setItems } = imagesSlice.actions;
export default imagesSlice.reducer;

// selector
export const getImagesItems = state => state.images.items;
export const getImagesQuery = state => state.images.query;
export const getImagesPage = state => state.images.page;
