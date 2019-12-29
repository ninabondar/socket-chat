import React from "react";
import BEM from "../../utils/BEM";
import "./InputMessage.scss";

const b = BEM("InputMessage");

const InputMessage = () => (
  <div className={b()}>
    <button className={b("send-button")}>SEND</button>
  </div>
);

export default InputMessage;
