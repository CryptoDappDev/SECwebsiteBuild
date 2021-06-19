/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import SecWalletMobView from './SecWalletMobView'
import SecWalletView from './SecWalletView'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60a76909ccf920aea94e85c4").then(body => body.text()), isAsync: false },
  { loading: fetch("js/suck-elons-cock.js").then(body => body.text()), isAsync: false },
]

let Controller

class OnlymemesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/OnlymemesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = OnlymemesView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '60cdb7d67d6b22a98f01a253'
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
    const proxies = OnlymemesView.Controller !== OnlymemesView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-2">
            <div data-collapse="medium" data-animation="default" data-duration={400} data-w-id="d53afd31-56fb-2ac4-46a3-5a7b9de5ba08" role="banner" className="af-class-fixed-nav-3 w-nav">
              <div className="af-class-gradient-border" />
              <div className="af-class-container af-class-nav-container w-container">
                <a href="#" className="af-class-brand-3 w-nav-brand"><img src="images/Sec_Wordstamp_V3.png" loading="lazy" width={150} sizes="120.00000762939453px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" className="af-class-image-16" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <div className="af-class-nav-cta-button-2 af-class-mobile">
                    <SecWalletMobView.Controller />
                    <a href="#" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header w-button"><strong>LIMITED DROPS</strong></a>
                  </div>
                  <a href="#" id="new-eco" className="af-class-nav-link-3 af-class-eco-nav w-inline-block">
                    <div className="af-class-nav-link-text">ECOSYSTEM</div>
                  </a>
                  <a href="#" className="af-class-nav-link-3 af-class-moonmap w-inline-block">
                    <div className="af-class-nav-link-text">Moonmap</div>
                  </a>
                  <a href="onlymemes.html" target="_blank" aria-current="page" className="af-class-nav-link-3 af-class-_2 w-inline-block w--current">
                    <div className="af-class-nav-link-text">ONLYMEMES</div>
                  </a>
                  <div className="af-class-nav-socials">
                    <a href="https://www.instagram.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/IG..Circle.svg" loading="lazy" width={30} alt="Instagram logo - suckelonscock" className="af-class-social-media-icon" /></a>
                    <a href="https://twitter.com/suckelonscock?lang=en" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/twitter-round.svg" loading="lazy" width={25} alt="Twitter logo - suckelonscock suck elon's cock " className="af-class-social-media-icon" /></a>
                    <a href="https://t.me/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/telegram-black.svg" loading="lazy" width={24} height={24} alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.reddit.com/r/SuckElonsCock/" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/reddit-round.svg" loading="lazy" height={24} width={24} alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.tiktok.com/@suckelonscoc?lang=en" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/tiktok-round.svg" loading="lazy" width={24} height={24} alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/facebook.svg" loading="lazy" alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/YT.svg" loading="lazy" width={25} alt className="af-class-social-media-icon" /></a>
                    <a href="https://discord.gg/HpYE8SPQhA" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/iconfinder_discord_18_5474122-svg-2.svg" loading="lazy" width={25} alt className="af-class-social-media-icon" /></a>
                  </div>
                </nav>
                <div className="af-class-nav-cta-button-2 af-class-desktop">
                  <SecWalletView.Controller />
                  <a href="#" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header w-button"><strong>LIMITED DROPS</strong></a>
                </div>
                <div className="af-class-menu-button-3 w-nav-button"><img src="images/menu-icon-white.svg" loading="lazy" alt className="af-class-image-17" /></div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default OnlymemesView

/* eslint-enable */