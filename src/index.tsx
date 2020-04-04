import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/FcComponent";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);