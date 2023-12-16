import {configureStore} from '@reduxjs/toolkit'
import apiReducers from './Apidata'

export const store = configureStore({
    reducer: apiReducers
})