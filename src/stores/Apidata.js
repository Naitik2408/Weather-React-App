import {createSlice} from '@reduxjs/toolkit'

const initialState={
    api:[
        {current:null},
        {location:null}
    ]
}

export const apiSlice = createSlice({
    name:"api",
    initialState,
    reducers:{
        setCurrentWeather:(state,action)=>{
            state.api[0].current=action.payload;
        },
        setLocationWeather:(state,action)=>{
            state.api[1].location=action.payload;
        }
    }
})

export const {setCurrentWeather, setLocationWeather} = apiSlice.actions
export default apiSlice.reducer;