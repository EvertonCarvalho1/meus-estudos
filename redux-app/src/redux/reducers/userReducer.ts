//reducer das informações dos usuários

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: 'Everton',
        job: 'Developer',
        age: '24',
    },
    reducers: {
        //action
        setName: (state, action) => {
            state.name = action.payload;
        },
        setJob: (state, action) => {
            state.job = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        }
    }
});

export const { setName, setJob, setAge } = slice.actions;
export default slice.reducer; //useReducer



