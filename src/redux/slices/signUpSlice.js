import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notification } from "../../utils/helper";
import CryptoJS from "crypto-js";

export const getListSignUp = createAsyncThunk(
  "getListSignUp",
  async (newData) => {
    const res = await axios.post( import.meta.env.VITE_API_URL + "users", newData);
    return res;
  }
);

export const getListUser = createAsyncThunk("getListUser", async () => {
  const res = await axios.get( import.meta.env.VITE_API_URL + "users");
  return res.data;
});

export const login = createAsyncThunk("login", async (infoLogin) => {
  const res = await axios.get( import.meta.env.VITE_API_URL + "users");
  return {
    users: res.data,
    infoLogin: infoLogin,
  };
});

export const deleteUser = createAsyncThunk("deleteUser", async (userId) => {
  const res = await axios.delete( import.meta.env.VITE_API_URL + "users/" + userId);
  return res;
});

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ userId, userData }) => {
    const res = await axios.put(
      import.meta.env.VITE_API_URL + "users/" + userId,
      userData
    );
    return res;
  }
);

export const searchByName = createAsyncThunk("searchByName", async (name) => {
  const res = await axios.get(import.meta.env.VITE_API_URL + "users?fullname_like=" + name);
  return res.data;
});

const craeteToken = (userObj) => {
  return CryptoJS.AES.encrypt(JSON.stringify(userObj), "keycheck").toString();
};

const initialState = {
  isLoadingSignUp: false,
  signUpList: [],
  isErro: false,
  message: "",
  isLogin: false,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    logout(state) {
      state.isLogin = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    // xử lí đăng kí
    builder.addCase(getListSignUp.pending, (state) => {
      state.isLoadingSignUp = true;
    });
    builder.addCase(getListSignUp.fulfilled, (state) => {
      state.isLoadingSignUp = false;
      notification("đăng kí thành công");
    });
    builder.addCase(getListSignUp.rejected, (state) => {
      state.isLoadingSignUp = false;
      state.isErro = true;
      state.message = "error , please try";
    });

    //xử lý đăng nhập
    builder.addCase(login.pending, (state) => {
      state.isLoadingSignUp = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoadingSignUp = false;
      // tìm xem tài khoản có tồn tại kh
      let user = action.payload.users.find(
        (user) =>
          user.username === action.payload.infoLogin.username &&
          user.password === action.payload.infoLogin.password
      );
      // kiểm tra đăng nhậP
      if (!user) {
        notification(
          "usernam or password sai mất rồi em ơi, thử lại đi nhé !",
          "error"
        );
      } else {
        // tạo token và thêm dữ lưu dữ liệU
        let token = craeteToken(user);
        localStorage.setItem("token", token);
        localStorage.setItem("userInfor", JSON.stringify(user));

        state.isLogin = true;
        notification("Login success");
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoadingSignUp = false;
      state.isErro = true;
      state.message = "error , please try";
    });

    // xử lí list user
    builder.addCase(getListUser.pending, (state) => {
      state.isLoadingSignUp = true;
    });
    builder.addCase(getListUser.fulfilled, (state, action) => {
      state.isLoadingSignUp = false;
      state.signUpList = [...action.payload];
    });
    builder.addCase(getListUser.rejected, (state) => {
      state.isLoadingSignUp = false;
      state.isErro = true;
      state.message = "error , please try";
    });

    // xử lí xoa user
    builder.addCase(deleteUser.pending, (state) => {
      state.isLoadingSignUp = true;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.isLoadingSignUp = false;
      notification("Delete Success");
      window.location.reload();
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.isLoadingSignUp = false;
      state.isErro = true;
      state.message = "error , please try";
    });

    // xử lí edit user
    builder.addCase(updateUser.pending, (state) => {
      state.isLoadingSignUp = true;
    });
    builder.addCase(updateUser.fulfilled, (state) => {
      state.isLoadingSignUp = false;
      notification("Updata Success");
    });
    builder.addCase(updateUser.rejected, (state) => {
      state.isLoadingSignUp = false;
      state.isErro = true;
      state.message = "error , please try";
    });

    // xử lí search
    builder.addCase(searchByName.pending, (state) => {
      state.isLoadingSignUp = true;
    });
    builder.addCase(searchByName.fulfilled, (state, action) => {
      state.isLoadingSignUp = false;
      state.signUpList = [ ...action.payload];
    });
    builder.addCase(searchByName.rejected, (state) => {
      state.isLoadingSignUp = false;
      state.isErro = true;
      state.message = "error , please try";
    });
  },
});

export const { logout } = signUpSlice.actions;
export default signUpSlice.reducer;
