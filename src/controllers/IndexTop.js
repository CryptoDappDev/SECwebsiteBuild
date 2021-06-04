import React from 'react'
import IndexView from '../views/IndexView'

let Controller

class IndexViewTop extends IndexView {
    
    constructor(props) {
        super(props);
      }


    static get Controller() {
        if (Controller) return Controller

        try {
            Controller = require('./IndexController')
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
    <IndexViewTop/>
  )

  