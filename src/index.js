import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./authentication/react-auth0-spa";
import config from "./authentication/auth_config.json";
import { Provider } from "react-redux";
import store from "./store/store/store";

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};


ReactDOM.render(
  <Provider store={store}>
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App id="app" />
    </Auth0Provider>,
    </Provider>,
  document.getElementById("root")
  
);

serviceWorker.unregister();