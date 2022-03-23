//reducer das informações dos usuários

import { createSlice } from '@reduxjs/toolkit'; 

export const slice = createSlice ({
    name: 'user',
    initialState: {
        name: 'Everton', 
        lastname: 'Carvalho',
        age: '24',
    },
    reducers: {
        
    }
});


