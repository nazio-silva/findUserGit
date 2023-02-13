import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Users } from '../interfaces/user';

export interface GitState {
  users: Array<Users>;
  name: string,
  failure: boolean,
}

const initialState: GitState = {
  users: [],
  name: "",
  failure: false
}

export const gitSlice = createSlice({
  name: 'git',
  initialState,
  reducers: {
    getAllUsersSuccess: (state, action: PayloadAction<string | any>) => {
      const data = []
      const user = action.payload
      data.push(user)

      state.users = data
    },
    getUserSuccess: (state, action: PayloadAction<string | any>) => {
      
      const data = []
      
      const user = action.payload
      data.push(user)

      state.failure = false
      state.users = data
     
    },
    getUserFailure: (state) => {
      state.failure = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { getAllUsersSuccess, getUserSuccess, getUserFailure } = gitSlice.actions

export default gitSlice.reducer