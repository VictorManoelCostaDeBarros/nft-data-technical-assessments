import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";

interface Movie {
  actors: string;
  metascore: string;
  plot: string;
  poster: string;
  title: string;
}

export interface MovieState {
  movie: Movie | null,
  isLoading: boolean,
}

const initialState: MovieState = {
  movie: null,
  isLoading: true,
}

export const searchMovie = createAsyncThunk(
  'movie/load',
  async (query: string) => {
    const response = await api.get(`/movies?search=${query}`)

    return response.data
  }
)

export const movieSlice = createSlice({
  name: 'movie',
  initialState: initialState,
  reducers: {
    reset(state) {
      state.movie = null
    }
  },
  extraReducers(builder) {
    builder.addCase(searchMovie.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(searchMovie.fulfilled, (state, action) => {
      state.movie = action.payload
      state.isLoading = false
    })
  },
})

export const movie = movieSlice.reducer
export const { reset } = movieSlice.actions