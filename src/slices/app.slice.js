/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  token: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.loading = true
    },
    hideLoading: (state) => {
      state.loading = false
    },
    signIn: (state, { payload }) => {
      state.token = payload.token
    },
    logOut: (state) => {
      state.token = null
    },
  },
})

export const { action } = appSlice
export const {
  showLoading, hideLoading, signIn, logOut,
} = appSlice.actions

export default appSlice.reducer
