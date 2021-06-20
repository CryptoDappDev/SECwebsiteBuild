/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class GoonWalletMobView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GoonWalletMobController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GoonWalletMobView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    /* View has no WebFlow data attributes */

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = GoonWalletMobView.Controller !== GoonWalletMobView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="">
          <a href="#" id="connect-to-wallet-only-memes" className="af-class-button-3 af-class-exclusive af-class-connect-to-wallet af-class-connectonlymemes w-button p-2"><strong className="af-class-text-gradient-3 af-class-onlymemesnavtext">CONNECT WALLET</strong></a>
        </span>
      </span>
    )
  }
}

export default GoonWalletMobView

/* eslint-enable */