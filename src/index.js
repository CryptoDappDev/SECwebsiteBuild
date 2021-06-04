import './scripts';
import './styles';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexController from './controllers/IndexController';

//Main Page Render
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));

ReactDOM.render(
<App 
  itemtoSell={'31673350562246474401696226698567993468440352420607247670176787853265168499108'}
/>
, document.getElementById('purchase-coin-button-2'));
//31673350562246474401696226698567993468440352420607247670176787853265168499108
//41618
ReactDOM.render(
  <App 
    itemtoSell = {'31673350562246474401696226698567993468440352420607247670176787854364680126533'}
  />
  , document.getElementById('purchase-pass-button-2'));
//31673350562246474401696226698567993468440352420607247670176787854364680126533
//41618
//74388322432098908024917585604204037373259788142643668309009598806569804365825


