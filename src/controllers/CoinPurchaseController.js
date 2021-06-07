import React from 'react'
import App from '../components/App';
import { useMetaMask } from 'metamask-react';
import { OpenSeaPort, Network } from 'opensea-js';


function CoinPurchaseController() {

    const { status, connect, account } = useMetaMask();



    return (
       <div>poop</div>
    )


}

export default (props) => (

    <CoinPurchaseController/>
)