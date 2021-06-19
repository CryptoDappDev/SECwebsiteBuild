import React from 'react'
import App from '../components/App';

import { OpenSeaPort, Network } from 'opensea-js';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useMetaMask } from 'metamask-react';
import GoonTickerView  from '../views/GoonTickerView';


function GoonTickerController() {

    
    
    return (
        <div class="w-75 d-flex justify-content-center">
            <coingecko-coin-ticker-widget coin-id="goonrich" currency="usd" locale="en" background-color="#000000" vce-ready />
        </div>
        
    )
}

export default (props) => (

    <GoonTickerController/>
)

