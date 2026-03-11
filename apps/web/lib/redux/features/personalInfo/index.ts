import { createSlice, PayloadAction } from "@reduxjs/toolkit"

enum Gender {
    MALE, FEMALE, OTHERS
}

export interface CustomerPersonalInfo {
    name: string,
    phone: string,
    age: string,
    gender: Gender
}

const initialState: CustomerPersonalInfo = {
    name: "",
    phone: "",
    age: "",
    gender: Gender.MALE
}

export const personalInfoSlice = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        updateName(state, action: PayloadAction<string>) {
            state.name = action.payload;
        },
        updatePhone(state, action: PayloadAction<string>) {
            state.phone = action.payload;
        },
        updateAge(state, action: PayloadAction<string>) {
            state.age = action.payload;
        },
        updateGender(state, action: PayloadAction<Gender>) {
            state.gender = action.payload;
        },
        clearPersonalInfo() {
            return initialState;
        }
    }
})


export default personalInfoSlice.reducer;
export const { } = personalInfoSlice.actions;
