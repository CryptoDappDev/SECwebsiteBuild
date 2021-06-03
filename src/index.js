import './scripts';
import './styles';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexController from './controllers/IndexController';
import TweetSecController from './controllers/TweetSecController';
import CopyButton1Controller from './controllers/CopyButton1Controller';
import {TwitterTweetEmbed} from 'react-twitter-embed';

//Main Page Render
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));

//SEC Tweet Render
ReactDOM.render( <TweetSecController/> , document.getElementById('elon-sec-tweet'));

//Meme Tweet Render
ReactDOM.render( <TwitterTweetEmbed tweetId={'1276418907968925696'} /> , document.getElementById('elon-meme-tweet'));

//Copy Cards
ReactDOM.render( <CopyButton1Controller/> , document.getElementById('contract-1'));
ReactDOM.render( <CopyButton1Controller/> , document.getElementById('contract-2'));

ReactDOM.render(
<App 
  itemtoSell={'41618'}
/>
, document.getElementById('purchase-coin-button-2'));
//31673350562246474401696226698567993468440352420607247670176787853265168499108

ReactDOM.render(
  <App 
    itemtoSell = {'41618'}
  />
  , document.getElementById('purchase-pass-button-2'));
//31673350562246474401696226698567993468440352420607247670176787854364680126533

//74388322432098908024917585604204037373259788142643668309009598806569804365825

