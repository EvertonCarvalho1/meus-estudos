//reducer das informações dos usuários

import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'theme',
    initialState: {
        status: 'light',
    },
    reducers: {
        setThemeStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})

export const { setThemeStatus } = slice.actions; 
export default slice.reducer; //useReducer


// export const { setName, setJob, setAge } = slice.actions;
// export default slice.reducer; //themeReducer