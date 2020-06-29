import React, { useState } from "react";
import "./style.css";

export interface HelloProps {
  children: any;
}

export const PlainLayout = (props: HelloProps) => {
  return <div className="plain-layout">{props.children}</div>;
};
