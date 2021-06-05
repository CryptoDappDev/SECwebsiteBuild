/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class CoinPurchaseView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CoinPurchaseController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CoinPurchaseView

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
    const proxies = CoinPurchaseView.Controller !== CoinPurchaseView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);

          @media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b765d888-a64f-7ef3-2f38-59e8d91c9d50\"] {display:none;opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ad1fe3e8-a35f-7165-8f77-b8a70802d25e\"] {display:none;opacity:0;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b765d888-a64f-7ef3-2f38-59e8d91c9d50\"] {display:none;opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ad1fe3e8-a35f-7165-8f77-b8a70802d25e\"] {display:none;opacity:0;}}
        ` }} />
        <span className="af-view">
          <div id="purchase-coin-button-2" className="af-class-purchase-button-for-nfts">
            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/31673350562246474401696226698567993468440352420607247670176787853265168499108/" target="_blank" className="af-class-buy-button w-button">Purchase</a>
          </div>
        </span>
      </span>
    )
  }
}

export default CoinPurchaseView

/* eslint-enable */