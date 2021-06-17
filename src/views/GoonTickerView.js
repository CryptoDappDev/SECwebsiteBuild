/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://widgets.coingecko.com/coingecko-coin-ticker-widget.js").then(body => body.text()), isAsync: false },
]

let Controller

class GoonTickerView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GoonTickerController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GoonTickerView

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
    const proxies = GoonTickerView.Controller !== GoonTickerView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <div>
            <div className="w-embed w-script">
              <coingecko-coin-ticker-widget coin-id="goonrich" currency="usd" locale="en" background-color="transparent" width={350} vce-ready />
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default GoonTickerView

/* eslint-enable */