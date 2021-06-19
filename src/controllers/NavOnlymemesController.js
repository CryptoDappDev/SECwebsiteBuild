import React from 'react'
import App from '../components/App';

import { OpenSeaPort, Network } from 'opensea-js';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useMetaMask } from 'metamask-react';
import GoonTickerView  from '../views/GoonTickerView';
import NavOnlymemesView from '../views/NavOnlymemesView';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function NavOnlymemesController() {
    
    return (
        <span>
            <style dangerouslySetInnerHTML={{ __html: `
            @import url(C:\\css\\normalize.css);
            @import url(C:\\css\\components.css);
            @import url(C:\\css\\suck-elons-cock.css);

            @media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b765d888-a64f-7ef3-2f38-59e8d91c9d50\"] {display:none;opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ad1fe3e8-a35f-7165-8f77-b8a70802d25e\"] {display:none;opacity:0;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b765d888-a64f-7ef3-2f38-59e8d91c9d50\"] {display:none;opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ad1fe3e8-a35f-7165-8f77-b8a70802d25e\"] {display:none;opacity:0;}}
            ` }} />
            <span className="af-view">
            <div className="af-class-download-button af-class-learn-more">
                <a href="Onlymemes" target="_blank" className="af-class-button af-class-learn af-class-hero w-inline-block"><img src="images/Apple-Icon.svg" loading="lazy" alt className="af-class-download-button-icon" />
                <div className="af-class-html-embed-12 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/onlymemes/OnlyMemes+LogoText.png" alt="OnlyMemes" /></div>
                </a>
            </div>
            </span>
        </span>
    )
}

export default (props) => (

    <NavOnlymemesController/>
)

