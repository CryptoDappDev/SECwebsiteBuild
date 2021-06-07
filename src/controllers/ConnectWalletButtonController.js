import React from 'react'
import ConnectToWalletNavController from './ConnectToWalletNavController'
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import PropTypes from 'prop-types'

export default class ConnectWalletButtonController extends React.Component {
   
    static propTypes = {
        connector : PropTypes.object,
    }
    
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.state = {loggingIn: false};

        // This binding is necessary to make `this` work in the callback
        this.walletConnectInit = this.walletConnectInit.bind(this);
        this.walletDisonnect = this.walletDisonnect.bind(this);
    }

    componentDidMount() {
        // need to make the initial call to getData() to populate
        // data right away
        this.getData();

        // Now we need to make it run at a specified interval
        setInterval(this.getData, 2000); // runs every 5 seconds.
      }
    getData = () => {
        // do something to fetch data from a remote API.
        const bridge = "https://bridge.walletconnect.org";
        this.connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
        if(this.connector.connected) {
            this.setState({isLoggedIn: true});
        }else { 
            this.setState({isLoggedIn: false});
        }
      }


    walletConnectInit = async () => {

        this.setState({loggingIn: true});
        const bridge = "https://bridge.walletconnect.org";
        this.connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
    
        // check if already connected
        if (!this.connector.connected) {
          // create new session
          await this.connector.createSession();
          this.forceUpdate();
        } else {
            console.log('im already connected!')
        }
        
        //update state
        if(this.connector.connected) {
            this.setState({isLoggedIn: true});
            console.log('I Connected!')
        }
    };

    walletDisonnect = async () => {

        const bridge = "https://bridge.walletconnect.org";
        this.connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });

        // check if connected
        if (this.connector.connected) {
            // kill session
            await this.connector.killSession();        
        }
        //update state
        if(!this.connector.connected) {
            this.setState({isLoggedIn: false});
            this.forceUpdate();
        }
    };


     render() {
         
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button =    <div class = "wallet-connect-mob-wrapper" onClick={this.walletDisonnect}>
                            <span> 
                                <div class="af-class-button-3 af-class-exclusive af-class-header w-button"  >DISCONNECT WALLET</div>
                            </span>
                        </div>;
        } else {
            button = <div class = "wallet-connect-mob-wrapper" onClick={this.walletConnectInit}>
                        <span > 
                            <div class="af-class-button-3 af-class-exclusive af-class-header w-button"  >CONNECT WALLET</div>
                        </span>
                    </div>;
        }


        return (
            <div>
                {button}
            </div>
        )
    }
}
