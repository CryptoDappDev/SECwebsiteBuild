import React from 'react'
import App from '../components/App';

import { OpenSeaPort, Network } from 'opensea-js';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useMetaMask } from 'metamask-react';
import Delayed from '../components/Delay';


function GoonNFTWuTangController() {

    const { status, connect, account } = useMetaMask();
    const bridge = "https://bridge.walletconnect.org";
    const connector = new WalletConnect({bridge, qrcodeModal: QRCodeModal });
    let fetchedAccount = '';

    if(!(status === 'unavailable')) {
        
        //console.log('THIS APP IS ON DESKTOP')

        if (status === "connected") {
            fetchedAccount = account;
            //console.log('')
            //console.log('Connected to Wallet on Desktop:')
            //console.log(account)
        }

    } else {
        //console.log('THIS APP IS ON MOBILE')
        //console.log('')
        if (connector.connected) {
            //console.log('')
            //console.log('Connected to Wallet on Mobile:')
            //console.log(connector.accounts[0]);
            fetchedAccount = connector.accounts[0];
        }
    }
    
    
    return (
        <Delayed waitBeforeShow={6000}>
        <div>
            <App 
                itemtoSell = {'46344851359934370536456800909699950300763532368427110215084597176620629884938'}
                account = {fetchedAccount}
            />
        </div>
        </Delayed>
    )
}

export default (props) => (

    <GoonNFTWuTangController/>
)

