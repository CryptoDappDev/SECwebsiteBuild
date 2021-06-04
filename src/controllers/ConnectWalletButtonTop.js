import React from 'react'
import IndexView from '../views/IndexView'

let Controller

class ConnectWalletButtonTop extends ConnectWalletButtonView {
    
  constructor(props) {
      super(props);
      this.Controller = this.Controller.bind(this);
    }


    static get Controller() {
        if (Controller) return Controller

        try {
            Controller = require('./ConnectWalletButtonController')
            Controller = Controller.default || Controller

            return Controller
        }
        catch (e) {
            if (e.code == 'MODULE_NOT_FOUND') {
            Controller = IndexView

            return Controller
            }

            throw e
        }
    }
}


  export default (props) => (
    <ConnectWalletButtonTop/>
  )

  