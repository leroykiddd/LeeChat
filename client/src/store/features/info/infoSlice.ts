import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "src/http";
import { IInfo } from "src/store/features/info/types";

export const fetchInfo = createAsyncThunk(
  "info/fetchInfo",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get<IInfo>("/info");
      return response.data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue("Не удалось загрузить данные!");
    }
  },
);
