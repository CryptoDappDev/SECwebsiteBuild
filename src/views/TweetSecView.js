/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://platform.twitter.com/widgets.js").then(body => body.text()), isAsync: true },
]

let Controller

class TweetSecView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/TweetSecController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = TweetSecView

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
    const proxies = TweetSecView.Controller !== TweetSecView ? transformProxies(this.props.children) : {

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
          <div id="elon-sec-tweet" data-w-id="6ca95cd9-c070-1d29-20ed-cc036ed14ddb" style={{opacity: 0}} className="af-class-elon-tweet">
            <div className="w-embed w-script">
              <blockquote className="af-class-twitter-tweet">
                <p lang="en" dir="ltr">SEC, three letter acronym, middle word is Elon’s</p>— Elon Musk (@elonmusk) <a href="https://twitter.com/elonmusk/status/1278764736876773383?ref_src=twsrc%5Etfw">July 2, 2020</a>
              </blockquote>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default TweetSecView

/* eslint-enable */