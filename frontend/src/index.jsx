import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./cianerd/App";

//fonts
import "./res/fonts/Bungee-Regular.ttf";
import "./res/fonts/NotoSansLaoLooped-Light.ttf";
import "./res/fonts/NotoSansLaoLooped.ttf";

// Style
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
      <App />
  </React.Fragment>
);

