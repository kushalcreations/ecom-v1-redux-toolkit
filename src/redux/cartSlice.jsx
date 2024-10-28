import {createSlice} from '@reduxjs/toolkit';

const initialState = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => { //
            return state.filter(item => item.id !== action.payload.id); 
        },
        incrementQuantity: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index].quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index].quantity -= 1;
        }
    }
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions; 
export default cartSlice.reducer;