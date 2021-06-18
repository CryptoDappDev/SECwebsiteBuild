import React from 'react'
import Fade from 'react-reveal/Fade';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './btn_style.css'
import CopyButton1View from '../views/CopyButton1View';
import TweetSecController from './TweetSecController';

class CopyButton1Controller extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { show: false };
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(){
        this.setState({ show: !this.state.show });
        setTimeout(() => {  this.setState({ show: !this.state.show }); }, 1000);
    }

    render() {
        return (
                <>
                <script src="https://kit.fontawesome.com/d97b87339f.js" crossorigin="anonymous"></script>
                <CopyToClipboard text={'0xb0302D59237e6104c3f0D145996302F044797Ca5'}
                    onCopy={() => this.setState({copied: true})}>
                    <div class="copy-input">
                        <image src="https://img.icons8.com/material-sharp/24/000000/copy.png" class="copy-btn" id="copyButton" onClick={() => { this.handleClick() }} ></image>
                        <input class = "copyClipboard"  value="0xb0302D59237e6104c3f0D145996302F044797Ca5" readonly ></input>
                            
                        
                    </div>   
                </CopyToClipboard>
                <Fade bottom cascade when={this.state.show}>
                <div id="copied-success" class="copied">
                <span>Copied!</span>
                </div>
                </Fade>
                </>
        )
    }
}

export default (props) => (
    <div class ="clipboard-3">  
        <CopyButton1Controller/>
    </div>
)
