/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import GoonHomeView from './GoonHomeView'
import GoonWalletMobView from './GoonWalletMobView'
import GoonWalletView from './GoonWalletView'

const scripts = [

]

let Controller

class GoonNavView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GoonNavController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GoonNavView

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
    const proxies = GoonNavView.Controller !== GoonNavView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <div data-animation="default" className="af-class-fixed-nav-3 af-class-onlymemesnav w-nav" data-collapse="medium" style={{opacity: 1}} data-w-id="67427028-420f-9239-4335-5d5a3c7d4977" role="banner" data-duration={400} id="Goon-Nav" data-doc-height={1}>
            <div className="af-class-gradient-border af-class-onlymemes" />
            <div id="onlymemestop" className="af-class-container af-class-nav-container af-class-onlymemescontainer w-container">
              <div className="af-class-div-block-74">
                <GoonHomeView.Controller />
              </div>
              <nav role="navigation" className="af-class-nav-menu af-class-onlymemesmenu w-nav-menu">
                <div className="af-class-nav-cta-button-2 af-class-mobile">
                  <GoonWalletMobView.Controller />
                  <a href="#" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header af-class-onlymemesedit w-button"><strong>LIMITED DROPS</strong></a>
                </div>
                <a href="#" id="new-eco" className="af-class-nav-link-3 af-class-eco-nav af-class-onlymemesecoo w-inline-block">
                  <div className="af-class-nav-link-text">ECOSYSTEM</div>
                </a>
                <a href="#" className="af-class-nav-link-3 af-class-moonmap w-inline-block">
                  <div className="af-class-nav-link-text">Moonmap</div>
                </a>
                <a href="onlymemes.html" target="_blank" aria-current="page" className="af-class-nav-link-3 af-class-_2 w-inline-block w--current">
                  <div className="af-class-nav-link-text">ONLYMEMES</div>
                </a>
                <div className="af-class-nav-socials af-class-onlymemesnavsocilas">
                  <a href="https://www.instagram.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv af-class-html-embed-29 w-inline-block">
                    <div className="af-class-html-embed-29 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/ig.logo.png" alt="IG" /></div>
                  </a>
                  <a href="https://twitter.com/suckelonscock?lang=en" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block">
                    <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/tt.png" alt /></div>
                  </a>
                  <a href="https://t.me/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block">
                    <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/telegram.logos.png" alt /></div>
                  </a>
                  <a href="https://www.reddit.com/r/SuckElonsCock/" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block">
                    <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/reddit.logo.png" alt /></div>
                  </a>
                  <a href="https://www.tiktok.com/@suckelonscoc?lang=en" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block">
                    <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/tiktok.logo.png" alt /></div>
                  </a>
                  <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block">
                    <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/fb+(2).png" alt /></div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block">
                    <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/youtube.logo.png" alt /></div>
                  </a>
                  <a href="https://discord.gg/HpYE8SPQhA" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block">
                    <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/discord.logo.png" alt /></div>
                  </a>
                </div>
              </nav>
              <div className="af-class-nav-cta-button-2 af-class-desktop">
                <GoonWalletView.Controller />
                <a href="#" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header af-class-onlymemesdrops w-button"><strong>LIMITED DROPS</strong></a>
              </div>
              <div className="af-class-menu-button-3 af-class-onlymemesmenu w-nav-button">
                <div className="af-class-menu-html w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/menuu.png" alt="menu" /></div>
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default GoonNavView

/* eslint-enable */