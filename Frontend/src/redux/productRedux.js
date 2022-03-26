import {createSlice} from "@reduxjs/toolkit";

const productSlice = createSlice ({
    name: "product",
    initialState: {
        products: null,
    },
    reducers: {
        addStoreProducts: (state,action)=>{
            state.products = action.payload;
        },
    },
});

export const {addStoreProducts} = productSlice.actions;
export default productSlice.reducer;