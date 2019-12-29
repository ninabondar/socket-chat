import React from "react";
import ReactDOM from "react-dom";
import socketIO from 'socket.io-client';
import App from "./components/App";

const socket = socketIO();

socket.connect('http://localhost:3003');

ReactDOM.render(<App />, document.querySelector("#root"));
