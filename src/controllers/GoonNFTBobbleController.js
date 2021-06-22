import React from 'react'
import { useRef } from 'react';
import { useState  } from 'react';

import App from '../components/App';

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import { useMetaMask } from 'metamask-react';

import Popup from 'reactjs-popup';

import Lottie from "lottie-react";
import closeButton from '../lottie/closeButton.json';
import confirmButton from '../lottie/confirmButton.json';
import cancelButton from '../lottie/cancelButton.json';

import loadingDots from '../lottie/loadingDots.json';
import Fade from 'react-reveal/Fade';



function GoonNFTBobbleController() {
    
    //Wallet Functions
    const { status, connect, account } = useMetaMask();
    const bridge = "https://bridge.walletconnect.org";
    let fetchedAccount = '';

    if(!(status === 'unavailable')) {
        //THIS APP IS ON DESKTOP
        if (status === "connected") {
            fetchedAccount = account;
        }
    } else {
        //THIS APP IS ON MOBILE
        const connector = new WalletConnect({bridge, qrcodeModal: QRCodeModal });
        if (connector.connected) {
            fetchedAccount = connector.accounts[0];
        }
    }

    //Checkout Panel
    const [confirm, setConfirm] = useState(false);

    const ref = useRef();
    const closeButtonRef = useRef();
    const confirmButtonRef = useRef();
    const cancelButtonRef = useRef();
    
    const openTooltip = () => ref.current.open();
    const closeTooltip = () => {
        ref.current.close();
        setConfirm(false);
    };

    function OnHoverClose() {closeButtonRef.current.play()}
    function OnClickConfirm() {confirmButtonRef.current.playSegments([30,95],true)}
    function OnClickCancel() {cancelButtonRef.current.playSegments([38,95],true)}
    function OnCompleteClose () {closeButtonRef.current.pause()}

    function OnCompleteConfirm () {
        confirmButtonRef.current.pause();
        setConfirm(true);
    }
    function OnCompleteCancel () {
        cancelButtonRef.current.pause();
        ref.current.close();
    }

    const btn_style = {
        float: 'right',
        width: '35px',
        padding: '10px 10px 0px 0px'
    }
    const confirm_btn_style = {
        float: 'left',
        width: '50%'
    }
    const cancel_btn_style = {
        float: 'right',
        width: '50%'
    }

    return (
        <div>

            <button type="button" className="button" onClick={openTooltip}> open </button>
            
            <span>
                <Popup ref={ref} modal={true} lockScroll={true} closeOnDocumentClick={false} closeOnEscape={false} >
                    
                    <div class='modalpagewrapper purchasePopup'>
                        <Fade bottom>
                            <div>
                                <div class='modalwrapper'>
                                    {(confirm === false) &&
                                        <div style={btn_style} onClick={closeTooltip} onMouseEnter={OnHoverClose}>
                                            <Lottie lottieRef={closeButtonRef} animationData={closeButton} autoplay={false} onLoopComplete={OnCompleteClose} />
                                        </div>
                                    }
                                    <div class='p-5'>
                                        {(confirm === true) &&
                                            <div>
                                            <div class='d-flex justify-content-center text-white p-4'>Awaiting Confirmation</div>
                                            <Lottie animationData={loadingDots} autoplay={true} />
                                            </div> 
                                        }{(confirm === false) &&
                                            <div class ='confirmPanel pb-5'>
                                                <div class='d-flex justify-content-center text-white'>Confirm Purchase:</div>
                                                <div class='checkoutbuttons'>
                                                    <div style={confirm_btn_style} onClick={OnClickConfirm}>
                                                        <Lottie lottieRef={confirmButtonRef} animationData={confirmButton} autoplay={false} onLoopComplete={OnCompleteConfirm} />
                                                    </div>
                                                    <div style={cancel_btn_style} onClick={OnClickCancel}>
                                                        <Lottie lottieRef={cancelButtonRef} animationData={cancelButton} autoplay={false} onLoopComplete={OnCompleteCancel} />
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </Popup>
            </span>
        </div>
    )
}


function GoonNFTBobbleControllerOLD() {

    const { status, connect, account } = useMetaMask();
    const bridge = "https://bridge.walletconnect.org";
    let fetchedAccount = '';

    if(!(status === 'unavailable')) {
        //THIS APP IS ON DESKTOP
        if (status === "connected") {
            fetchedAccount = account;
        }
    } else {
        //THIS APP IS ON MOBILE
        const connector = new WalletConnect({bridge, qrcodeModal: QRCodeModal });
        if (connector.connected) {
            fetchedAccount = connector.accounts[0];
        }
    }
    
    
    return (
        <div>
            <App 
                itemtoSell = {'46344851359934370536456800909699950300763532368427110215084597163426490351626'}
                account = {fetchedAccount}
            />
        </div>
    )
}

export default (props) => (

    <GoonNFTBobbleController/>
)

