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
        this.state = {
            loggingIn: false,
            isLoggedIn: false,
            connector : null
        };


        // This binding is necessary to make `this` work in the callback
        this.walletConnectInit = this.walletConnectInit.bind(this);
        this.walletDisonnect = this.walletDisonnect.bind(this);
        
    }

    componentDidMount() {
        // need to make the initial call to getData() to populate
        // data right away

        if(this.state.connector === null) {
            const bridge = "https://bridge.walletconnect.org";
            const connector = new WalletConnect({bridge, qrcodeModal: QRCodeModal });
            this.setState({connector : connector});
        }
        
        // Now we need to make it run at a specified interval
         // runs every 2 seconds.
        setInterval(this.getData, 2000)
        //this.getData();
    }

    getData = async () => {
        // do something to fetch data from a remote API.
        //console.log(this.state.connector.accounts)
        if (!(this.state.connector == null)) {
            if ((this.state.connector.connected)) {
                this.setState({isLoggedIn: true});
            }else { 
                this.setState({isLoggedIn: false});
            }
        }else { 
            this.setState({isLoggedIn: false});
        }
      }

      componentWillUnmount() {
        clearInterval(this.getData);
      }


    walletConnectInit = async () => {
        
        this.setState({loggingIn: true});
        
        
        console.log('im already connectinggg!!!!....')
        //console.log(this.state.connector.accounts)
        const bridge = "https://bridge.walletconnect.org";
        const connector = new WalletConnect({bridge, qrcodeModal: QRCodeModal });
        await connector.createSession();
        this.setState({connector : connector});
        
    };
    

    walletDisonnect = async () => {
       

        // check if connected
        if (this.state.connector.connected) {
            // kill session
            await this.state.connector.killSession();        
        }
        //update state
        if(! await this.state.connector.connected) {
            this.setState({isLoggedIn: false});
            const bridge = "https://bridge.walletconnect.org";
            const connector = new WalletConnect({bridge, qrcodeModal: QRCodeModal });
            this.setState({connector : connector});
        }
    };


     render() {
        let button;
        if (this.state.isLoggedIn) {
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
