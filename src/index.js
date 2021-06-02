import './scripts';
import './styles';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import IndexController from './controllers/IndexController';
import TweetSecController from './controllers/TweetSecController';
import CopyButton1Controller from './controllers/CopyButton1Controller';

//Main Page Render
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'));

//SEC Tweet Render
ReactDOM.render( <TweetSecController/> , document.getElementById('sec-tweet'));

//Meme Tweet Render
ReactDOM.render( <TweetSecController/> , document.getElementById('meme-tweet'));

//Copy Cards
ReactDOM.render( <CopyButton1Controller/> , document.getElementById('copy-card-1'));
ReactDOM.render( <CopyButton1Controller/> , document.getElementById('copy-card-2'));




