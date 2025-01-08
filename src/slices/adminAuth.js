/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setMessage } from './message'

import AuthService from '../services/auth.service'

const user = JSON.parse(localStorage.getItem('admin'))

export const register = createAsyncThunk(
  'adminAuth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.adminRegister(email, password)
      thunkAPI.dispatch(setMessage(response.data.message))
      return response.data
    } catch (error) {

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)

export const login = createAsyncThunk(
  'adminAuth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await AuthService.adminLogin(email, password)
      return { user: data }
    } catch (error) {

      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue()
    }
  }
)

export const logout = createAsyncThunk('adminAuth/logout', async () => {
  await AuthService.adminLogout()
})

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

const authSlice = createSlice({
  name: 'adminAuth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = false
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoggedIn = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true
        state.user = action.payload.user
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = false
        state.user = null
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoggedIn = false
        state.user = null
      })
  }
})

const { reducer } = authSlice
export default reducer
