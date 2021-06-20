import React, { useState, useEffect } from 'react';
import GoonWalletView from '../views/GoonWalletView';
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
                <span className="">
                    <a href="#" id="connect-to-wallet-nav-goon" className="af-class-button-3 af-class-exclusive af-class-connect-to-wallet af-class-onlymemesconnect w-button p-2"><strong className="af-class-text-gradient-3 af-class-header-connect-waller af-class-onlymemestext">CONNECT WALLET</strong></a>
                </span>
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
                    <div class="af-class-text-gradient-1 text-nowrap small"  >Enabing Meme Tesseract...</div>
                </div>
            </Fade>
        }

    </div>
    );
}

export default () => (

    <ConnectToWalletNavController/>
)
