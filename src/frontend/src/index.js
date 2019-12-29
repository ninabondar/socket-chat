import React from "react";
import ReactDOM from "react-dom";
import socketIO from 'socket.io-client';
import App from "./components/App";

const socket = new socketIO();

ReactDOM.render(<App />, document.querySelector("#root"));
