/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60a76909ccf920aea94e85c4").then(body => body.text()), isAsync: false },
  { loading: fetch("js/suck-elons-cock.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
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

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '60d11642cb5ba20fc9b4c5bf'
    htmlEl.dataset['wfSite'] = '60a76909ccf920aea94e85c4'

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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-home-body">
            <div className="af-class-container-4 w-container" />
            <div className="w-container">
              <div className="af-class-div-block-98">
                <div data-w-id="4f7ce490-839e-ac4f-a937-c7d7292a55ed" style={{opacity: 0}} className="af-class-onlymemes-logo">
                  <div className="af-class-logo-onlymemes w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/onlymemes/OnlyMemes+Logo+TYPE+WHITE_Subtext.png" alt /></div>
                </div>
                <div data-w-id="fb475ff2-cff5-a9db-8976-dd57bc6ed943" style={{opacity: 0}} className="af-class-unleashingf">
                  <div className="af-class-text-block-26">Unleashing the true potential of <strong className="af-class-bold-text-14">Ethereum utilities</strong> to provide a <strong className="af-class-bold-text-15">social environment</strong> on the block-chain.</div>
                </div>
                <div data-w-id="8a5a0851-0d19-41e6-154e-f62cdbeb6405" style={{opacity: 0}} className="af-class-join-telegram w-clearfix">
                  <a href="#" className="af-class-link-block-8 w-inline-block">
                    <div className="af-class-html-embed-34 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/tg.outline.512.png" alt /></div>
                  </a>
                  <div className="af-class-text-block-27">Join our <strong className="af-class-bold-text-16">Telegram </strong>for news and updates.</div>
                </div>
                <div data-w-id="4e20b9ca-8c91-36e1-4ea0-85796446cabb" style={{opacity: 0}} className="w-row">
                  <div className="w-col w-col-6">
                    <div data-hover data-delay={0} className="af-class-dropdown w-dropdown">
                      <div className="af-class-dropdown-toggle w-dropdown-toggle">
                        <div className="af-class-icon w-icon-dropdown-toggle" />
                        <div className="af-class-text-block-28">Coin Incubator<span className="af-class-text-span-11">™</span></div>
                      </div>
                      <nav className="af-class-dropdown-list w-dropdown-list">
                        <a href="#" className="af-class-dropdown-link w-dropdown-link">$SEC</a>
                        <a href="#" className="af-class-dropdown-link-2 w-dropdown-link">$GOON</a>
                      </nav>
                    </div>
                  </div>
                  <div className="w-col w-col-6" />
                </div>
                <div data-w-id="293ce9ca-1abf-09ab-1b50-7431f08ddbbc" style={{opacity: 0}} className="af-class-beta-testing">
                  <div className="af-class-div-block-86">
                    <div className="af-class-html-embed-35 w-embed"><img width="100%" src="https://secmedia.s3.us-east-2.amazonaws.com/onlymemes/Card+Deck+Preview.png" alt /></div>
                  </div>
                  <div className="af-class-div-block-89">
                    <div className="af-class-div-block-88">
                      <div className="af-class-text-block-29">Beta-Testing <span className="af-class-text-span-12">opening soon.</span></div>
                    </div>
                    <div className="af-class-div-block-91">
                      <a href="#" className="af-class-button-4 w-button">Join the <span className="af-class-text-span-13">Inner-Circle</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-id="8d6e80b3-de5d-da76-6c30-695c3ddb197b" style={{opacity: 0}} className="af-class-container-3 w-container">
              <div className="af-class-social-bottoms">
                <div className="af-class-div-block-93">
                  <a href="https://twitter.com/onlymemesmarket" target="_blank" className="af-class-link-block-9 w-inline-block">
                    <div className="af-class-html-embed-36 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/black.twitter.518px.png" alt /></div>
                  </a>
                </div>
                <div className="af-class-div-block-94">
                  <a href="https://www.reddit.com/r/OnlyMemesMarket/" target="_blank" className="af-class-link-block-10 w-inline-block">
                    <div className="af-class-html-embed-37 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/reddit.black.512.png" alt /></div>
                  </a>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */