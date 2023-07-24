import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    status: null
}

export const productSlice = createSlice({
    name: 'singleProduct',
    initialState,
    reducers: {}
})

export default productSlice.reducer