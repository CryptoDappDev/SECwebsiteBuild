import './scripts';
import './styles';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexController from './controllers/IndexController';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3-react';
import {MetaMaskProvider} from 'metamask-react';
import OnlymemesController from './controllers/OnlymemesController';





//Main Page Render
ReactDOM.render(
    <BrowserRouter>
      <Switch>
        
          <MetaMaskProvider>
            <Route exact path="/" component={IndexController}/>
            <Route path="/Onlymemes" component={OnlymemesController}/>
          </MetaMaskProvider>
          
      </Switch>
    </BrowserRouter>
, document.getElementById('root'));

//TOKEN
//31673350562246474401696226698567993468440352420607247670176787853265168499108
//41618

//31673350562246474401696226698567993468440352420607247670176787854364680126533
//41618
//74388322432098908024917585604204037373259788142643668309009598806569804365825
//Testing
//Testing Nicks Computer


