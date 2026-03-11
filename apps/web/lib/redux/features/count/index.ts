import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface COUNT {
    majorIndex: number
}


const initialState: COUNT = {
    majorIndex: 0
}

const countSlice = createSlice({
    name: "majorIndex",
    initialState,
    reducers: {
        increaseCount(state) {
            state.majorIndex += 1;
        },
        decrementCount(state) {
            state.majorIndex -= 1;
        },
        initializeState(state, action: PayloadAction<COUNT>) {
            return action.payload;
        }
    }
})


export default countSlice.reducer;
export const { increaseCount, decrementCount, initializeState } = countSlice.actions;