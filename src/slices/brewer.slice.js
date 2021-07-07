/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { showLoading, hideLoading } from 'slices/app.slice'

const initialState = {
  queries: [],
  breweries: [],
}

const brewerSlice = createSlice({
  name: 'brewer',
  initialState,
  reducers: {
    getBreweries: (state, { payload }) => {
      state.queries.push(payload.query)
      state.breweries = payload.breweries
    },
  },
})

export const { action } = brewerSlice
export const { getBreweries, addQuery } = brewerSlice.actions

export default brewerSlice.reducer

export function fetchBreweries(query) {
  return async (dispatch) => {
    const city = query.replace(' ', '_')

    dispatch(showLoading())

    try {
      const response = await fetch(
        `https://api.openbrewerydb.org/breweries?by_city=${city}&page=1`,
      )
      const breweries = await response.json()

      dispatch(getBreweries({ breweries, query }))

      dispatch(hideLoading())
    } catch (error) {
      dispatch(hideLoading())
    }
  }
}
