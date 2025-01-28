import React from "react";
import ReactDOMClient from "react-dom/client";
import singleSpaReact from "single-spa-react";
import App from "./App";
import { cssLifecycleFactory } from "vite-plugin-single-spa/ex";

const lc = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Дополнительная обработка ошибок, если нужно
    return (
      <div>
        <h1>Произошла ошибка в микрофронтенде</h1>
        <pre>{JSON.stringify({ err, info, props }, null, 2)}</pre>
      </div>
    );
  },
});
// IMPORTANT:  Because the file is named spa.tsx, the string 'spa'
// must be passed to the call to cssLifecycleFactory.
const cssLc = cssLifecycleFactory("spa" /* optional factory options */);
export const bootstrap = [cssLc.bootstrap, lc.bootstrap];
export const mount = [cssLc.mount, lc.mount];
export const unmount = [cssLc.unmount, lc.unmount];

// OPTIONALLY: если хотите локально запускать как обычное приложение
// (без single-spa), можно сделать что-то вроде:
// if (!window.__POWERED_BY_SINGLE_SPA__) {
//   ReactDOM.render(<Root />, document.getElementById('root'))
// }
