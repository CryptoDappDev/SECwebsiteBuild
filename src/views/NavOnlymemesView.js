/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class NavOnlymemesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NavOnlymemesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NavOnlymemesView

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
    const proxies = NavOnlymemesView.Controller !== NavOnlymemesView ? transformProxies(this.props.children) : {

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
          <div className="af-class-download-button af-class-learn-more">
            <a href="goonrich.html" target="_blank" className="af-class-button af-class-learn af-class-hero w-inline-block">
              <div className="af-class-html-embed-12 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/onlymemes/OnlyMemes+LogoText.png" alt="OnlyMemes" /></div>
            </a>
          </div>
        </span>
      </span>
    )
  }
}

export default NavOnlymemesView

/* eslint-enable */