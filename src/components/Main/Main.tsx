import React, { useState } from "react";
import ListBox from "./ListBox/ListBox";
import WatchedBox from "./WatchedBox";

function Main({ children }) {
  return <main className='main'>{children}</main>;
}

export default Main;
