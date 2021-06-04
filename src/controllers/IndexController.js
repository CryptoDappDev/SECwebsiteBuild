import React from 'react'
import IndexView from '../views/IndexView'
import ConnectToWalletNavController from './ConnectToWalletNavController';
import ConnectToWalletMobController from './ConnectToWalletMobController';
import TweetMemeController from './TweetMemeController';
import TweetSecController from './TweetSecController';
import CopyButton1Controller from './CopyButton1Controller';
import CopyButton2Controller from './CopyButton2Controller';

export default (props) => (
  <IndexView>
    <ConnectToWalletNavController/> 
    <ConnectToWalletMobController/>
    <TweetSecController/>
    <TweetMemeController/>
    <CopyButton1Controller/>
    <CopyButton2Controller/>
  </IndexView>
)