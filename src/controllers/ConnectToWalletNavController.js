import React, { useState, useEffect } from 'react';
import ConnectToWalletNavView from '../views/ConnectToWalletNavView';
import { connectWallet } from '../constants';
import PropTypes from 'prop-types'
import { OpenSeaPort, Network } from 'opensea-js';
import { web3Provider, onNetworkUpdate, OPENSEA_JS_URL, GITHUB_URL } from '../constants';
import * as Web3 from 'web3'
import { useMetaMask } from 'metamask-react';
import Fade from 'react-reveal/Fade';
import { BrowserView, MobileView, isBrowser, isDesktop } from "react-device-detect";
import { useWeb3React } from '@web3-react/core';
import detectEthereumProvider from '@metamask/detect-provider';
import { useAsync } from 'react-async-hook';
//import {MetaMaskProvider} from 'metamask-react'


function ConnectToWalletNavController() {

    const { status, connect, account } = useMetaMask();
    const provider = detectEthereumProvider();
    

    useEffect(() => {
        
        console.log('');
        console.log('Info From Desktop Hook');
        console.log(status);

        console.log('');
        console.log('Info From Mobile Hook');
        console.log(provider);

        console.log('');
        
        console.log(window.ethereum);

        if(isDesktop) {
            if(window.ethereum.isMetaMask) {
                console.log('I have Metamask!!!!');
            } else {
                console.log('I DONT have Metamask!!!!');
            }
        }

        console.log('');

        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
          }

        if (status === "connected")
        {
            return <div>Connected account: {account}</div>
        } 
    });

    function handleClick(){
        window.ethereum.enable() 
                  
    }
    
    return ( 
    <div>
        {(status === "notConnected") &&
            <div onClick={() => { handleClick() }} >
                <Fade top>
                <ConnectToWalletNavView> <wallet/> </ConnectToWalletNavView> 
                </Fade>
            </div>
        }
        {(status === "connected") &&

            <Fade right>
                <div class="container border border-5 rounded p-2" > 
                    <div class="af-class-text-gradient-1 text-nowrap small"  >Wallet: {account}</div>
                </div>
            </Fade>
        }
        {(status === "connecting") &&
            <Fade bottom>
                <div class="container border border-5 rounded p-2" > 
                    <div class="af-class-text-gradient-1 text-nowrap small"  >Starting Cock Engine...</div>
                </div>
            </Fade>
        }

    </div>
    );
}

export default () => (

    <ConnectToWalletNavController/>
)
