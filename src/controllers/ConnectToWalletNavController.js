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

    useEffect(() => {

        if (status === "connected")
        {
            return <div>Connected account: {account}</div>
        } 
    });

    function handleClick(){
        connect();   
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
