import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../src/components/redux/counterSlice.js'
// import Layout from './pages/Layout'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <Layout/> */}
      <App />
    </Provider>
  </React.StrictMode>
);
