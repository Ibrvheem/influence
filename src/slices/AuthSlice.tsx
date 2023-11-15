import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const initialState = {
  user: [],
};
interface authProp {
  email: string;
  password: string;
}
export const loginUser = createAsyncThunk("log/user", async ({ email, password }: authProp) => {
  const user = await signInWithEmailAndPassword(auth, email, password);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
});
export const getUserData = createAsyncThunk("user/data", async (userId: string) => {
  const userRef = doc(db, "users", userId);
  try {
    const userData = await getDoc(userRef);
    return userData.data();
  } catch (e) {
    console.error(e);
  }
});
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log("user:", state.user);
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log("user:", state.user);
    });
  },
});

export default AuthSlice.reducer;
