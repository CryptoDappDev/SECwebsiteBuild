import React from 'react'
import App from '../components/App';
import { useMetaMask } from 'metamask-react';
import { OpenSeaPort, Network } from 'opensea-js';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";


function CoinPurchaseController() {

    const { status, connect, account } = useMetaMask();
    const bridge = "https://bridge.walletconnect.org";
    const connector = new WalletConnect({bridge, qrcodeModal: QRCodeModal });

    if(status === 'unavailable') {
        console.log('THIS APP IS ON MOBILE')
    } else {
        console.log('THIS APP IS ON DESKTOP')
    }



    return (
        <div>
            <App 
                itemtoSell = {'31673350562246474401696226698567993468440352420607247670176787853265168499108'}
            />
        </div>
    )


}

export default (props) => (

    <CoinPurchaseController/>
)

////31673350562246474401696226698567993468440352420607247670176787853265168499108