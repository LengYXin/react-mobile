
/// <reference path="../typings/index.d.ts" />
import "antd-mobile/dist/antd-mobile.css";
import "./style.css";

import * as React from 'react';
import { render } from 'react-dom';
import { Provider, observer } from 'mobx-react';
import store from './store';
import Routers from "./routers";
render(
  <Provider
    {...store}
  >
    <Routers />
  </Provider>,
  document.getElementById('root')
);
