import { createSlice } from "@reduxjs/toolkit";
import calculate from "../utils/calculate";
import getStorageOptions from "../utils/getStorageOptions";
import getLowestPrices from "../utils/getLowestPrices";

import data from "../assets/data/data";

export const dataKeys = Object.keys(data);

const initialState = {
  storage: 0,
  transfer: 0
};

dataKeys.forEach((item) => {
  const options = getStorageOptions(data[item]);

  initialState[item] = {
    storageCost: 0,
    transferCost: 0,
    lowestPrice: false,
    totalPrice: 0
  };

  if (data[item].min) {
    initialState[item].min = data[item].min;
  }

  if (data[item].max) {
    initialState[item].max = data[item].max;
  }

  if (options) {
    initialState[item].options = options;
  }
  
});

export const pricesSlice = createSlice({
  name: "prices",
  initialState,
  reducers: {
    storageChange: (state, {payload}) => {
      const results = calculate(payload, "storage");
      dataKeys.forEach((item) => {
        state[item].storageCost = results[item];
      })
      state.storage = payload;
    },
    transferChange: (state, {payload}) => {
      const results = calculate(payload, "transfer");
      dataKeys.forEach((item) => {
        state[item].transferCost = results[item];
      })
      state.transfer = payload;
    },
    setActiveOption: (state, {payload}) => {
      const [providerName, data] = payload;
      state[providerName].options = data;
    },
    setTotalPrice: (state, {payload}) => {
      const lowestPrices = getLowestPrices(payload);
      payload.forEach((item) => {
        const name = item[0];
        if (lowestPrices.includes(name)) {
          state[name].lowestPrice = true;
        } else {
          state[name].lowestPrice = false;
        }
        state[name].totalPrice = item[1];
      })
    }
  }
});

export const { storageChange, transferChange, setActiveOption, setTotalPrice } = pricesSlice.actions;
export default pricesSlice.reducer;