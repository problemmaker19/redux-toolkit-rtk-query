import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "./ActionCreators";

interface UserState {
    users: IUser[];
    loading: boolean;
    error: string;
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending.type] : (state) => {
            state.loading = true
        },
        [fetchUsers.fulfilled.type] : (state, action: PayloadAction<IUser[]>) => {
            state.loading = false
            state.error = ''
            state.users = action.payload
        },
        [fetchUsers.rejected.type] : (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

export default userSlice.reducer;