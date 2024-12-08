import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  userid: string;
}

const initialState: UserState = {
  username: "",
  userid: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username;
      state.userid = action.payload.userid;
    },
    clearUser(state) {
      state.username = "";
      state.userid = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
