import React from 'react'
import App from '../components/App';

import { OpenSeaPort, Network } from 'opensea-js';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useMetaMask } from 'metamask-react';
import GoonHomeView  from '../views/GoonHomeView';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function GoonHomeController() {
    
    return (
        
        <Link to="/">
            <GoonHomeView/>
        </Link>
        
    )
}

export default (props) => (

    <GoonHomeController/>
)

