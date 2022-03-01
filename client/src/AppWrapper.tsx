import React from "react";
import { hot } from "react-hot-loader/root";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store";

const store = setupStore();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default hot(AppWrapper);
