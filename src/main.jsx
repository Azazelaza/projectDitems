import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { RouterApp } from "./router/RouterApp";
(async () => {
  if (import.meta.env.VITE_REACT_APPLICATIONID == 1) {
    import("./scss/1/main.scss");
  } else {
    import("./scss/2/main.scss");
  }
})();
import "./scss/general.scss";
import "./i18n";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import { Helmet } from "react-helmet";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Helmet>
      <title>{import.meta.env.VITE_REACT_APPLICATION_NAME}</title>
    </Helmet>
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </Provider>
);
