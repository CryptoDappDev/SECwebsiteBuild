/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import TweetSecView from './TweetSecView'
import TweetMemeView from './TweetMemeView'
import CopyButton1View from './CopyButton1View'
import CopyButton2View from './CopyButton2View'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60a76909ccf920aea94e85c4").then(body => body.text()), isAsync: false },
  { loading: fetch("js/suck-elons-cock.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
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
    htmlEl.dataset['wfPage'] = '60b70d8bbb2560f685cf6a2d'
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

          @media (max-width:767px) and (min-width:480px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b765d888-a64f-7ef3-2f38-59e8d91c9d50\"] {display:none;opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ad1fe3e8-a35f-7165-8f77-b8a70802d25e\"] {display:none;opacity:0;}}@media (max-width:479px) {html.w-mod-js:not(.w-mod-ix) [data-w-id=\"b765d888-a64f-7ef3-2f38-59e8d91c9d50\"] {display:none;opacity:0;}html.w-mod-js:not(.w-mod-ix) [data-w-id=\"ad1fe3e8-a35f-7165-8f77-b8a70802d25e\"] {display:none;opacity:0;}}
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div data-collapse="medium" data-animation="default" data-duration={400} data-w-id="26dacbdd-55df-b3cd-8a97-abb85b796d64" style={{opacity: 0}} role="banner" className="af-class-fixed-nav-2 w-nav">
              <div className="af-class-container af-class-nav-container w-container">
                <a href="#top" className="af-class-brand-2 w-nav-brand"><img src="images/Sec_Wordstamp_V3.png" loading="lazy" width={150} sizes="150px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" className="af-class-image-4" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <a href="#FeatureList" className="af-class-nav-link-2 w-inline-block">
                    <div className="af-class-nav-link-text">ECOSYSTEM</div>
                  </a>
                  <a href="#" className="af-class-nav-link-2 af-class-moonmap w-inline-block">
                    <div className="af-class-nav-link-text">Moonmap</div>
                  </a>
                  <a href="#exclusive" className="af-class-nav-link-2 w-inline-block">
                    <div className="af-class-nav-link-text">MEME MARKETPLACE</div>
                  </a>
                  <div className="af-class-nav-cta-button-2">
                    <a href="#limited-drops" data-w-id="26dacbdd-55df-b3cd-8a97-abb85b796d73" className="af-class-button-3 af-class-exclusive w-button"><strong>EXCLUSIVE NFTS</strong></a>
                  </div>
                  <div className="af-class-nav-socials">
                    <a href="https://www.instagram.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/IG..Circle.svg" loading="lazy" width={30} alt="Instagram logo - suckelonscock" className="af-class-social-media-icon" /></a>
                    <a href="https://twitter.com/suckelonscock?lang=en" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/twitter-round.svg" loading="lazy" width={25} alt="Twitter logo - suckelonscock suck elon's cock " className="af-class-social-media-icon" /></a>
                    <a href="https://t.me/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/telegram-black.svg" loading="lazy" width={24} height={24} alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.reddit.com/r/SuckElonsCock/" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/reddit-round.svg" loading="lazy" height={24} width={24} alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.tiktok.com/@suckelonscoc?lang=en" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/tiktok-round.svg" loading="lazy" width={24} height={24} alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/facebook.svg" loading="lazy" alt className="af-class-social-media-icon" /></a>
                    <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-social-media-link af-class-navv w-inline-block"><img src="images/YT.svg" loading="lazy" width={25} alt className="af-class-social-media-icon" /></a>
                  </div>
                </nav>
                <div className="af-class-menu-button-3 w-nav-button"><img src="images/menu-icon-white.svg" loading="lazy" alt /></div>
              </div>
            </div>
            <div className="af-class-comet-background"><img src="images/Meteor-BG.gif" loading="eager" alt width={960} className="af-class-commet-image" /></div>
            <div data-w-id="fa94892c-6481-a468-d867-d461dc3c76b6" style={{display: 'none'}} className="af-class-button--back-to-top">
              <a href="#top" className="w-inline-block"><img src="images/arrow.svg" loading="lazy" width={50} alt className="af-class-back-to-top-arrow" /></a>
            </div>
            <div data-w-id="70fe3ea7-0e17-1190-dddb-817617726b6d" style={{display: 'flex'}} className="af-class-preloader"><img src="images/Buy_Sec_Loader_Desktop.gif" loading="eager" width={960} alt="Buy SEC Preloader with suck elon's cock coin, custom loader, and animated word stamp." className="af-class-buy-sec-loader" /><img src="images/loader.gif" loading="lazy" width={250} alt="Custom $SEC bubble loader." className="af-class-preloader-bar" /><img src="images/Coin_spin_isolated_v2_400.gif" loading="eager" alt="Spinning SEC Coin" className="af-class-big-spinning-coin" /></div>
            <div id="top" data-w-id="c50d35a4-afc5-52b4-4df2-051165d5d057" className="af-class-section-hero"><img src="images/astro.grad.png" loading="lazy" style={{opacity: 0, WebkitTransform: 'translate3d(-1px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(-1px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(-1px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(-1px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} data-w-id="7dd4beb7-80cc-3a1f-ac78-7b0ae7289422" srcSet="images/astro.grad-p-500.png 500w, images/astro.grad-p-800.png 800w, images/astro.grad.png 1080w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 297.326416015625px, 30vw" alt className="af-class-image-14" />
              <div data-w-id="34d76856-e065-1538-c253-4e4f551a0272" style={{opacity: 0}} className="af-class-moon-gif">
                <div className="af-class-moon-html w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/MOON.SEC.gif" alt="Rotating moon with SEC coins" /></div>
              </div>
              <div className="af-class-main-hero-container">
                <div className="af-class-hero-content"><img src="images/SuckElonsCock_LogoType_V1_halfres.gif" loading="lazy" width={700} style={{opacity: 0}} alt="Suck Elon's Cock suckelonscock main logo stamp" data-w-id="892b798d-6819-b838-1025-f37200c7e2fc" className="af-class-main-stamp" />
                  <div data-w-id="f4212dfc-01bf-94c0-27c7-f993d382560f" style={{opacity: 0}} className="af-class-header-div">
                    <div className="af-class-text-gradient-1 af-class-hero1">SUCK&nbsp;ELON'S COCK</div>
                  </div>
                  <TweetSecView.Controller />
                  <div data-w-id="cfa80b7a-bd8c-5a84-9535-8a581e58c152" style={{opacity: 0}} className="af-class-download-buttons af-class-hero-download-buttons">
                    <div className="af-class-download-button af-class-buy">
                      <a href="#buy-text" className="af-class-button af-class-hero w-inline-block"><img src="images/Apple-Icon.svg" loading="lazy" alt className="af-class-download-button-icon" />
                        <div>BUY <em>$SEC</em></div>
                      </a>
                    </div>
                    <div className="af-class-download-button af-class-learn-more">
                      <a href="#FeatureList" className="af-class-button af-class-learn af-class-hero w-inline-block"><img src="images/Apple-Icon.svg" loading="lazy" alt className="af-class-download-button-icon" />
                        <div>Learn More</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-w-id="895e3aeb-bc03-a4de-1bf6-e2f9e06c5b80" style={{display: 'none'}} className="af-class-small-container">
                <div className="af-class-hero-text-sticky">
                  <div className="af-class-hero-text-holder">
                    <div className="af-class-hero-text-holder-1">
                      <h1 className="af-class-hero-text af-class-_1">BUY</h1>
                    </div>
                    <div className="af-class-hero-text-holder-2"><img src="images/Sec_Wordstamp_V3.png" loading="lazy" width={625} sizes="(max-width: 767px) 100vw, (max-width: 991px) 552.795166015625px, (max-width: 1279px) 56vw, 625px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" /></div>
                  </div>
                </div>
                <div data-w-id="08a4f49f-daee-82d9-5871-e852a62377d9" style={{display: 'none', opacity: 0}} className="af-class-hero-product-demo">
                  <div className="af-class-product-phone-image-container af-class-clouds"><img src="images/grad.Clouds-BG.png" loading="eager" sizes="(max-width: 479px) 100vw, (max-width: 1439px) 90vw, 100vw" srcSet="images/grad.Clouds-BG-p-500.png 500w, images/grad.Clouds-BG-p-800.png 800w, images/grad.Clouds-BG-p-1080.png 1080w, images/grad.Clouds-BG.png 1920w" alt className="af-class-image-3" /></div>
                  <div className="af-class-product-demo-sticky">
                    <div className="af-class-product-phone-image-container">
                      <div className="af-class-product-container">
                        <div className="af-class-product-phone-image-holder">
                          <div className="af-class-html-embed-2 w-embed"><img src="https://sechosting.s3.us-east-2.amazonaws.com/media/Diamond.Cock.Rocket.Optimized.gif" alt="Diamond Cock Rocket, SEC going to the moon" /></div><img src="images/Apple-iPhone-11-Pro-Space-Grey-1.png" loading="lazy" sizes="100vw" srcSet="images/Apple-iPhone-11-Pro-Space-Grey-1-p-500.png 500w, images/Apple-iPhone-11-Pro-Space-Grey-1.png 588w" alt className="af-class-product-phone-image af-class-image" />
                          <div className="af-class-product-phone-content"><img src="images/ChatList-White.jpg" loading="lazy" sizes="100vw" srcSet="images/ChatList-White-p-500.jpeg 500w, images/ChatList-White.jpg 750w" alt className="af-class-product-phone-demo-image" /><img src="images/LockScreen-Light.jpg" loading="lazy" sizes="100vw" srcSet="images/LockScreen-Light-p-800.jpeg 800w, images/LockScreen-Light.jpg 839w" alt className="af-class-iphone-lock-screen-image" /></div>
                        </div>
                        <a href="#" className="af-class-play-icon-holder w-inline-block w-lightbox"><img src="images/play-button.svg" loading="lazy" alt className="af-class-play-icon-image" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-id="e7900c2b-f352-bc3f-9059-0de98acb9930" style={{display: 'none'}} className="af-class-section af-class-second">
              <div className="af-class-container">
                <div className="af-class-customers-panel">
                  <div className="af-class-text-holder">
                    <div className="af-class-text-center">
                      <div className="af-class-fade-in-on-scroll">
                        <h5 className="af-class-symbol-of-finance"><span className="af-class-text-span-2">$SEC</span>&nbsp;is a symbol of financial freedom thru decentralization.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-id="b765d888-a64f-7ef3-2f38-59e8d91c9d50" className="af-class-div-block-15">
              <div data-w-id="ad1fe3e8-a35f-7165-8f77-b8a70802d25e" className="af-class-html-embed-2 af-class-mobile-cock w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/diamond.cock.rocket.comp.2.gif" alt="Diamond Cock Rocket, SEC going to the moon" /></div>
            </div>
            <div id="FeatureList" data-w-id="915aa8c7-5aca-7b30-6198-454a7174844e" style={{display: 'none'}} className="af-class-section af-class-light-blue-bg af-class-features">
              <div className="af-class-container af-class-eco">
                <div data-w-id="915aa8c7-5aca-7b30-6198-454a71748463" style={{opacity: 0}} className="af-class-text-center af-class-ecosystem">
                  <div className="af-class-fade-in-on-scroll af-class-ecoo-text">
                    <h2 className="af-class-text-gradient-2 af-class-sec-ecosystem-header"><span className="af-class-text-span-3">$SEC</span>&nbsp;Ecosystem</h2>
                  </div>
                  <div className="af-class-text-container">
                    <div className="af-class-fade-in-on-scroll">
                      <p className="af-class-paragraph"><span className="af-class-text-span-4"><strong>$SEC</strong></span>&nbsp;is much more than a great meme.</p>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid af-class-feature-grid">
                  <div id="w-node-_7b19d13e-0e8d-2369-5abf-e24fedfaa268-85cf6a2d" data-w-id="7b19d13e-0e8d-2369-5abf-e24fedfaa268" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-what-is-sec">
                    <div className="af-class-card-item-content af-class-what-it-is">
                      <div className="af-class-fade-in-on-scroll af-class-what-iiss-sec">
                        <h4 className="af-class-text-gradient-1 af-class-whatt-is-it">WHAT IS <span className="af-class-text-span-5">$SEC</span>?</h4>
                      </div>
                      <div className="af-class-fade-in-on-scroll af-class-what-is-it">
                        <p className="af-class-what-is-sec"><strong><em>$SEC</em></strong>, is an ERC20 Token built on the ETH blockchain. It was born from Elon Musk's Legendary <a href="https://twitter.com/elonmusk/status/1278764736876773383?lang=en" target="_blank">tweet</a> at the <a href="https://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission" target="_blank">SEC</a> (Securities and Exchange Commission), an institution which perpetuates a corrupt financial system.<br /><br />Unlike fiat currencies, <strong><em>$SEC</em></strong>&nbsp;is a freedom movement through decentralization and degeneracy. Each transaction carries a <strong>4.20%</strong> fee, which is redistributed among existing <strong><em>$SEC </em></strong>holders. You will grow and earn rewards daily just for holding.</p>
                      </div>
                    </div>
                    <div className="af-class-div-block-16"><img src="images/Coin.Stack.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1279px) 97vw, 1000.0000610351562px" srcSet="images/Coin.Stack-p-500.png 500w, images/Coin.Stack.png 1000w" alt="$SEC coin stack with suck elon's cock coin on top." /></div>
                  </div>
                  <div id="w-node-_628315c7-9285-9cb1-4712-9cee2615c32b-85cf6a2d" data-w-id="628315c7-9285-9cb1-4712-9cee2615c32b" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-mememe af-class-meme"><img src="images/Elon_Head_Laughing-620x547.gif" loading="lazy" alt="GIF of Elon's face laughing with his jaw moving" />
                    <TweetMemeView.Controller />
                    <div className="af-class-card-item-content af-class-meme-market-card">
                      <div className="af-class-fade-in-on-scroll af-class-meme-marketplace-elon-head">
                        <h4 className="af-class-text-gradient-1 af-class-meme-market-place-card">Meme Marketplace</h4>
                      </div>
                      <div className="af-class-fade-in-on-scroll">
                        <p className="af-class-paragraph-2">The <strong><em>$SEC&nbsp;Meme Marketplace</em></strong> will be a place to swap, create, and collect community memes. The Market will also have official <strong><em>$SEC</em></strong> limited edition release NFTs. Stay tuned for the launch of the Meme Marketplace.</p>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-bf82d6d8-19d5-7d71-8ac6-e7bb3b408754-85cf6a2d" data-w-id="bf82d6d8-19d5-7d71-8ac6-e7bb3b408754" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-tools">
                    <div className="af-class-card-item-content af-class-tools">
                      <div className="af-class-card-feature-center af-class-tool-center">
                        <a href="https://analytics.sushi.com/pairs/0xFffAE206a0c17C4804F04af3880ff8A9DeA39210" target="_blank" className="af-class-link-block-4 w-inline-block">
                          <div className="af-class-fade-in-on-scroll af-class-toool"><img src="images/susssshi.png" loading="lazy" srcSet="images/susssshi-p-500.png 500w, images/susssshi.png 512w" sizes="(max-width: 479px) 55.000003814697266px, 112.98611450195312px" alt="Sushi swap icon" className="af-class-card-feature-icon af-class-tool" /></div>
                          <div className="af-class-fade-in-on-scroll">
                            <h6 className="af-class-heading">Sushi Swap</h6>
                          </div>
                          <div className="af-class-fade-in-on-scroll">
                            <p className="af-class-paragraph-5">Swap ETH for <strong><em>$SEC</em></strong>.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_0d566606-fd33-a3ac-c52c-ded5bb91b946-85cf6a2d" data-w-id="0d566606-fd33-a3ac-c52c-ded5bb91b946" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-tools">
                    <div className="af-class-card-item-content af-class-tools">
                      <div className="af-class-card-feature-center af-class-tool-center">
                        <a href="https://www.dextools.io/app/sushiswap/pair-explorer/0xfffae206a0c17c4804f04af3880ff8a9dea39210" target="_blank" className="af-class-link-block-4 af-class-toools w-inline-block">
                          <div className="af-class-fade-in-on-scroll af-class-toool"><img src="images/image.png" loading="lazy" alt="DEXtools logo" className="af-class-card-feature-icon af-class-tool" /></div>
                          <div className="af-class-fade-in-on-scroll">
                            <h6 className="af-class-heading-2">Dextools</h6>
                          </div>
                          <div className="af-class-fade-in-on-scroll">
                            <p className="af-class-paragraph-4">Chart and contract.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_7bea1a70-4116-a7db-c374-fff947065047-85cf6a2d" data-w-id="7bea1a70-4116-a7db-c374-fff947065047" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-tools">
                    <div className="af-class-card-item-content af-class-tools">
                      <div className="af-class-card-feature-center af-class-tool-center">
                        <a href="https://zerion.io/" target="_blank" className="af-class-link-block-4 af-class-toools w-inline-block">
                          <div className="af-class-fade-in-on-scroll af-class-toool"><img src="images/zerion.png" loading="lazy" sizes="(max-width: 479px) 55.000003814697266px, 112.98611450195312px" srcSet="images/zerion-p-500.png 500w, images/zerion-p-800.png 800w, images/zerion.png 1024w" alt="Zerion wallet logo" className="af-class-card-feature-icon af-class-tool" /></div>
                          <div className="af-class-fade-in-on-scroll">
                            <h6 className="af-class-heading-3">Zerion</h6>
                          </div>
                          <div className="af-class-fade-in-on-scroll">
                            <p className="af-class-paragraph-6">View <strong><em>$SEC</em></strong> wallet.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="w-node-_1748d82b-49c0-8078-53ed-77133df041a2-85cf6a2d" data-w-id="1748d82b-49c0-8078-53ed-77133df041a2" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-contract-address">
                    <div className="af-class-card-item-content af-class-contract-copy">
                      <div className="af-class-card-feature-center af-class-contract">
                        <div className="af-class-fade-in-on-scroll">
                          <h6 className="af-class-text-gradient-2 af-class-contract-address-text"><em>$SEC</em>&nbsp;Contract:</h6>
                        </div>
                        <div className="af-class-fade-in-on-scroll af-class-_09x">
                          <CopyButton1View.Controller />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="socialss" data-w-id="27b10c2b-faaf-eb26-6218-b3d0e2a19fad" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-socials w-node-_27b10c2b-faaf-eb26-6218-b3d0e2a19fad-85cf6a2d">
                    <div className="af-class-card-item-content af-class-socials">
                      <div className="af-class-card-feature-center af-class-socials">
                        <div className="af-class-fade-in-on-scroll">
                          <h6 className="af-class-text-gradient-1 af-class-social">Join us.</h6>
                        </div>
                        <div className="af-class-fade-in-on-scroll">
                          <p className="af-class-paragraph-3">Stay updated on <strong><em>$SEC</em></strong>&nbsp;news and dank memes.</p>
                        </div>
                        <div className="af-class-fade-in-on-scroll af-class-socials">
                          <a href="https://twitter.com/suckelonscock?lang=en" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/iconfinder_twitter_circle_black_107155.svg" loading="lazy" height={70} alt="Circle twitter icon" className="af-class-card-feature-icon af-class-tweeter" /></a>
                          <a href="https://www.instagram.com/suckelonscock" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/instagram-round.svg" loading="lazy" alt="Circle Instagram icon" className="af-class-card-feature-icon" /></a>
                          <a href="https://t.me/suckelonscock" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/telegram-black.svg" loading="lazy" alt="Circle Telegram icon" className="af-class-card-feature-icon" /></a>
                          <a href="https://www.tiktok.com/@suckelonscoc?lang=en" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/tiktok-round.svg" loading="lazy" alt="Circle TikTok icon" className="af-class-card-feature-icon" /></a>
                          <a href="https://www.reddit.com/r/SuckElonsCock/" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/reddit-round.svg" loading="lazy" alt="Circle Reddit icon" className="af-class-card-feature-icon" /></a>
                          <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/facebook.svg" loading="lazy" alt="Circle Facebook Icon" className="af-class-card-feature-icon" /></a>
                          <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/YT.svg" loading="lazy" alt="Circle YouTube Icon" className="af-class-card-feature-icon" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="About" className="af-class-section af-class-testing">
              <div className="af-class-container af-class-test">
                <div className="w-layout-grid af-class-grid-6-col">
                  <div id="w-node-_64ab14ec-0a71-9abe-100c-83874d852302-85cf6a2d" className="af-class-trusted-content">
                    <div className="af-class-content-sticky">
                      <div className="af-class-fade-in-on-scroll">
                        <h2>TheMoonmap</h2>
                      </div>
                      <div className="af-class-fade-in-on-scroll">
                        <p className="af-class-text-xl">The <strong>$SEC</strong> timeline. When and how to get to mooon.</p>
                      </div>
                      <div className="af-class-div-block-6" />
                    </div>
                  </div>
                  <div id="w-node-_1511bf1a-c884-944b-f323-a3f0ea7187b5-85cf6a2d" className="af-class-trusted-content af-class-trusted-list">
                    <div className="af-class-trusted-overlay-container">
                      <div className="af-class-trusted-white-overlay" />
                      <div className="af-class-trusted-white-overlay af-class-bottom" />
                    </div>
                    <div className="af-class-trusted-item">
                      <div className="af-class-trusted-item-header">
                        <h2 className="af-class-trusted-no">Phase 1</h2>
                        <h5>Launch</h5>
                      </div>
                      <div className="af-class-fade-in-on-scroll">
                        <p className="af-class-text-xl">Launched 100T $SEC coins. <br />50% burned and leaving a 69T supply in circulation. Locked liquidity with a 6.9T app and marketing fund.<br /><br />With +2K holders and&nbsp;+2K telegram members <strong>$SECs</strong> next move is being listed on Coingecko and Coinmarketcap.</p>
                      </div>
                    </div>
                    <div className="af-class-trusted-item">
                      <div className="af-class-trusted-item-header">
                        <h2 className="af-class-trusted-no">Phase 2</h2>
                        <h5>Meme Marketplace</h5>
                      </div>
                      <div className="af-class-fade-in-on-scroll">
                        <p className="af-class-text-xl">The <strong>$SEC</strong>&nbsp;Meme Marketplace will be powered by NFTs. A <strong>non fungible token</strong> allows for the community to not only share but also monetize their content. <strong>Limited Edition $SEC&nbsp;NFTs</strong> will be available on tiered levels.</p>
                      </div>
                    </div>
                    <div className="af-class-trusted-item">
                      <div className="af-class-trusted-item-header">
                        <h2 className="af-class-trusted-no">Phase 3<span className="af-class-text-small" /></h2>
                        <h5>Ecosystem</h5>
                      </div>
                      <div className="af-class-fade-in-on-scroll">
                        <p className="af-class-text-xl">Introduce Shaft and <strong>$SEC</strong>&nbsp;swap and offer yield farming to benefit <strong>$SEC</strong>&nbsp;holders. Shaft will allow swapping ERC20 and BSC making $SEC a multichain ecosystem.<br /><br />SEC Swap Everyone's Crypto will function as a DEX (like Uniswap) but allow meme holders to swap any of their coins between ecosystems.</p>
                      </div>
                    </div>
                    <div className="af-class-trusted-item af-class-last">
                      <div className="af-class-trusted-item-header">
                        <h2 className="af-class-trusted-no">Phase 4</h2>
                        <h5>Promise Land.</h5>
                      </div>
                      <div className="af-class-fade-in-on-scroll">
                        <p className="af-class-text-xl">With the introduction of collateralized lending for meme coins <strong>$SEC&nbsp;</strong>will get noticed by Elon and then he will get even more beef with the actual SEC. By then could see 100K&nbsp;<strong>$SEC </strong>holders with a market cap of +$1B and have multiple exchange listings.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="limited-drops" data-w-id="3b85f699-c949-f7e1-8df4-af4ae38e2f0c" style={{display: 'none'}} className="af-class-section af-class-dark">
              <div className="af-class-container">
                <div className="w-layout-grid af-class-grid-10-columns">
                  <div id="w-node-ece89d93-2df3-9c66-994e-a99360ef72ee-85cf6a2d" className="af-class-content">
                    <div data-w-id="3b85f699-c949-f7e1-8df4-af4ae38e2f0e" style={{opacity: 0}} className="af-class-text-center af-class-lliimiited-drops">
                      <div className="af-class-fade-in-on-scroll">
                        <h2 className="af-class-text-gradient-2 af-class-limited-drops">Limited Edition Drops</h2>
                      </div>
                      <div className="af-class-text-container">
                        <div className="af-class-fade-in-on-scroll">
                          <p className="af-class-white-text af-class-nft-store">Official <strong><em>$SEC</em></strong>&nbsp;NFTs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-layout-grid af-class-grid-6-col">
                      <div id="w-node-_3b85f699-c949-f7e1-8df4-af4ae38e2f15-85cf6a2d" data-w-id="3b85f699-c949-f7e1-8df4-af4ae38e2f15" style={{opacity: 0}} className="af-class-card-item af-class-limited-nft">
                        <div className="af-class-card-item-content">
                          <div data-w-id="e029fe69-e449-4a9b-5f1c-8ef44a11cecd" className="af-class-card-iphone af-class-coin"><img src="images/Coin_spin_isolated_v2_400.gif" loading="lazy" alt /></div>
                          <div className="af-class-text-center af-class-coin-nft">
                            <div className="af-class-fade-in-on-scroll">
                              <h4 className="af-class-white-text"><em>$SEC</em>&nbsp;Coin</h4>
                            </div>
                            <div className="af-class-fade-in-on-scroll af-class-sec-coin-text">
                              <p className="af-class-light-grey af-class-nft">There are only <strong>420</strong> official <strong><em>$SEC</em></strong> coins. Once these coins are claimed no more will be minted. </p>
                            </div>
                          </div>
                          <div id="purchase-coin-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase">
                            <div id="purchase-coin-button-1" className="af-class-nft-price-div"><img src="images/ETH-logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                              <div className="af-class-text-block-11">0.05</div>
                            </div>
                            <div id="purchase-coin-button-2" className="af-class-purchase-button-for-nfts">
                              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/31673350562246474401696226698567993468440352420607247670176787853265168499108/" target="_blank" className="af-class-buy-button w-button">Purchase</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-_8502412a-6474-098f-1e09-76bce2a84c58-85cf6a2d" data-w-id="8502412a-6474-098f-1e09-76bce2a84c58" style={{opacity: 0}} className="af-class-card-item af-class-limited-nft">
                        <div className="af-class-card-item-content">
                          <div data-w-id="8502412a-6474-098f-1e09-76bce2a84c5a" className="af-class-card-iphone"><img src="images/Boarding_Pass_NFT_Holder_Web_Preview_v1.png" loading="lazy" sizes="(max-width: 479px) 56vw, (max-width: 767px) 38vw, (max-width: 991px) 17vw, (max-width: 1439px) 141.59722900390625px, 152.04861450195312px" srcSet="images/Boarding_Pass_NFT_Holder_Web_Preview_v1-p-500.png 500w, images/Boarding_Pass_NFT_Holder_Web_Preview_v1.png 588w" alt className="af-class-card-iphone-image" />
                            <div className="af-class-card-iphone-overlay" />
                            <div className="af-class-card-phone-image-container"><img src="images/Boarding_Pass_NFT_Web_Preview.png" loading="lazy" sizes="(max-width: 479px) 34vw, (max-width: 767px) 31vw, (max-width: 991px) 11vw, (max-width: 1439px) 89.61805725097656px, 100.06945037841797px" srcSet="images/Boarding_Pass_NFT_Web_Preview-p-500.png 500w, images/Boarding_Pass_NFT_Web_Preview.png 588w" alt className="af-class-width-pct" /></div>
                          </div>
                          <div className="af-class-text-center af-class-boarding-pass">
                            <div className="af-class-fade-in-on-scroll">
                              <h4 className="af-class-white-text">Boarding Pass</h4>
                            </div>
                            <div className="af-class-fade-in-on-scroll">
                              <p className="af-class-light-grey af-class-nft">The <strong><em>$SEC</em></strong><em> </em>boarding pass is an exclusive all <strong>access ticket </strong>to the moon landing afterparty with <strong>VIP&nbsp;</strong>access along the way. <br /><br />The pass unlocks special access within the <strong><em>$SEC</em></strong>&nbsp;ecosystem and will be used as your identification plus proves you have a 💎🍆.</p>
                            </div>
                          </div>
                          <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase">
                            <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="images/ETH-logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                              <div className="af-class-text-block-11">0.5</div>
                            </div>
                            <div id="purchase-pass-button-2" className="af-class-purchase-button-for-nfts">
                              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/31673350562246474401696226698567993468440352420607247670176787854364680126533/" target="_blank" className="af-class-buy-button w-button">Purchase</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-_74cbd762-9528-e95b-cab8-025c6f989808-85cf6a2d" data-w-id="74cbd762-9528-e95b-cab8-025c6f989808" style={{opacity: 0}} className="af-class-card-item">
                        <div className="af-class-card-item-content">
                          <div data-w-id="74cbd762-9528-e95b-cab8-025c6f98980a" className="af-class-card-iphone af-class-opensea"><img src="images/opensea.png" loading="lazy" sizes="(max-width: 479px) 31vw, (max-width: 767px) 38vw, (max-width: 1279px) 122.69097900390625px, (max-width: 1439px) 130.01736450195312px, 145.6944580078125px" srcSet="images/opensea-p-500.png 500w, images/opensea.png 700w" alt="OpeanSea NFT Marketplace icon" className="af-class-card-iphone-image" />
                            <div className="af-class-card-iphone-overlay" />
                            <div className="af-class-card-phone-image-container af-class-opensea"><img src="images/Boarding_Pass_NFT_Web_Preview.png" loading="lazy" sizes="100vw" srcSet="images/Boarding_Pass_NFT_Web_Preview-p-500.png 500w, images/Boarding_Pass_NFT_Web_Preview.png 588w" alt className="af-class-width-pct" /></div>
                          </div>
                          <div className="af-class-text-center af-class-boarding-pass">
                            <div className="af-class-fade-in-on-scroll">
                              <h4 className="af-class-white-text">OpenSea</h4>
                            </div>
                            <div className="af-class-fade-in-on-scroll">
                              <p className="af-class-light-grey af-class-nft">Visit the Official <strong><em>$SEC</em></strong> OpenSea marketplace. </p>
                            </div>
                          </div>
                          <div className="af-class-nft-buy-buttons af-class-sec-coin">
                            <a href="https://opensea.io/accounts/SuckElonsCock" target="_blank" className="af-class-buy-button w-button">View</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="exclusive" className="af-class-testimonials-container">
                  <div className="af-class-dont-take-our-word-title">
                    <div data-w-id="a15f259d-5266-a725-4a94-c0ad4733536f" style={{opacity: 0}} className="af-class-fade-in-on-scroll">
                      <h3 className="af-class-text-gradient-2 af-class-meme-marketplace-heading">Meme Marketplace</h3>
                      <div className="af-class-text-block-6"><strong>ONLYMEMES </strong>™ - Cumming soon.</div>
                    </div>
                  </div>
                  <div data-w-id="994e1b81-044d-149c-a619-f3caa5e5856c" style={{opacity: 0}} className="w-layout-grid af-class-grid-testimonial">
                    <div id="w-node-a8be1144-33e5-4510-22ce-cb492d5fbc02-2d5fbc02" data-w-id="a8be1144-33e5-4510-22ce-cb492d5fbc02" className="af-class-card-item af-class-memes-coming-soon">
                      <div className="af-class-card-item-content af-class-memecard">
                        <div className="af-class-testimonial-header">
                          <div className="af-class-testimonial-text"><strong className="af-class-text-gradient-1 af-class-for-meme-cards">YOUR MEMES HERE</strong></div>
                        </div>
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-5">
                            <div data-w-id="10aedcee-c9d7-854a-e77a-e302c069415c" className="af-class-text-block-2 af-class-cummingsoon">CUMMING&nbsp;SOON</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-a8be1144-33e5-4510-22ce-cb492d5fbc02-2d5fbc02" data-w-id="a8be1144-33e5-4510-22ce-cb492d5fbc02" className="af-class-card-item af-class-memes-coming-soon">
                      <div className="af-class-card-item-content af-class-memecard">
                        <div className="af-class-testimonial-header">
                          <div className="af-class-testimonial-text"><strong className="af-class-text-gradient-1 af-class-for-meme-cards">YOUR MEMES HERE</strong></div>
                        </div>
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-5">
                            <div data-w-id="10aedcee-c9d7-854a-e77a-e302c069415c" className="af-class-text-block-2 af-class-cummingsoon">CUMMING&nbsp;SOON</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="buy-sec" data-w-id="a136e70e-a0ad-9d01-ec68-2e537ec8b5de" style={{opacity: 0}} className="af-class-section af-class-light-blue-bg af-class-buying-sec">
              <div id="jump-tp-buy" className="af-class-container af-class-how-to-buy-container">
                <div className="af-class-columns w-row">
                  <div className="af-class-column-2 w-col w-col-6">
                    <div className="af-class-content af-class-phone-content-text af-class-how-to">
                      <div className="af-class-fade-in-on-scroll af-class-buyy">
                        <div className="af-class-fade-in-on-scroll af-class-how-to-buy-div">
                          <h2 id="buy-text" className="af-class-text-gradient-1 af-class-how-to-buy">BUY</h2><img src="images/Sec_Wordstamp_V3.png" loading="lazy" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 49vw, (max-width: 1279px) 48vw, 620px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" className="af-class-seclogoo" />
                          <div className="af-class-app-icon-text-holder">
                            <div className="af-class-text-block-3"><strong className="af-class-bold-text-4">With SushiSwap and MetaMask</strong></div>
                          </div>
                          <CopyButton2View.Controller />
                          <div className="af-class-download-buttons af-class-mobile-vertical af-class-small">
                            <div className="af-class-download-button af-class-sushi">
                              <div className="af-class-fade-in-on-scroll">
                                <a href="https://app.sushi.com/" target="_blank" className="af-class-button af-class-exclusive w-inline-block"><img src="images/Apple-Icon.svg" loading="lazy" alt className="af-class-download-button-icon" />
                                  <div className="af-class-text-block-10">Open SushiSwap</div>
                                </a>
                              </div>
                            </div>
                            <div className="af-class-download-button af-class-how-to-bottom">
                              <div className="af-class-fade-in-on-scroll">
                                <a href="https://www.tiktok.com/@suckelonscoc/video/6965152433211182341?_d=secCgYIASAHKAESMgowUsW44BtHn89HZgIgP2T%2FGitNGV1r6nFRx5bVvuA7JTj%2B5fzsiVQQRwMW05%2FF%2BpDfGgA%3D&language=en&preview_pb=0&sec_user_id=MS4wLjABAAAAOqNDERXqhPxxd4Hwm_pVp2bhClAgkTBol2IVueEY-MnoUFCPfWAWW5BgmRQb8ojW&share_app_id=1233&share_item_id=6965152433211182341&share_link_id=A6C35CEF-5D33-43FB-BA04-05BAB01A7179&source=h5_m&timestamp=1621701248&tt_from=copy&u_code=dihglah47fj815&user_id=6963835200853804037&utm_campaign=client_share&utm_medium=ios&utm_source=copy&_r=1" target="_blank" className="af-class-button af-class-download w-inline-block">
                                  <div className="af-class-text-block-7">How To</div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-column w-col w-col-6">
                    <div className="af-class-content">
                      <div className="af-class-phone-holder-container">
                        <div className="af-class-phone-slider-container">
                          <div data-delay={3000} data-animation="fade" data-autoplay={1} data-duration={500} data-infinite={1} className="af-class-phone-slider w-slider">
                            <div className="af-class-phone-slider-mask w-slider-mask">
                              <div className="af-class-phone-slide w-slide"><img src="images/Sushi-phone-image.png" loading="lazy" sizes="(max-width: 767px) 100vw, 238.99307250976562px" srcSet="images/Sushi-phone-image-p-500.png 500w, images/Sushi-phone-image.png 750w" alt="How to buy $SEC, SushiSwap iPhone screenshot" className="af-class-phone-slide-image" /></div>
                            </div>
                            <div className="af-class-phone-slider-arrows w-slider-arrow-left">
                              <div className="w-icon-slider-left" />
                            </div>
                            <div className="af-class-phone-slider-arrows w-slider-arrow-right">
                              <div className="w-icon-slider-right" />
                            </div>
                            <div className="af-class-phone-slide-nav w-slider-nav w-round" />
                          </div>
                        </div><img src="images/Hand-iPhoneX.png" loading="lazy" alt className="af-class-phone-holder-image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid af-class-grid-6-col af-class-hidden" />
              </div>
            </div>
            <div data-w-id="0c3abcc3-1f0e-90e3-c240-a8406e383f3c" style={{display: 'none'}} className="af-class-buy-sec-banner"><img src="images/BUY_SEC_KINETIC_TYPE_BANNER-1-v2.gif" loading="lazy" alt="Looping kinetic buy $SEC banner" className="af-class-image-2" /></div>
            <div data-w-id="a7ae8139-7702-a512-bda8-29a484a16923" style={{display: 'none'}} className="af-class-footer">
              <div data-w-id="c8462666-1c04-4391-a7d5-15b610290b37" style={{opacity: 0}} className="af-class-footer-flex-container">
                <div className="af-class-social-media-content af-class-desktop">
                  <div className="af-class-div-block-12">
                    <a href="https://www.instagram.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-footer-soc w-inline-block"><img src="images/IG..Circle.svg" loading="lazy" width={30} alt="Small circle Instagram icon" className="af-class-social-media-icon" /></a>
                    <a href="https://twitter.com/suckelonscock?lang=en" target="_blank" className="af-class-social-media-link af-class-footer-soc w-inline-block"><img src="images/iconfinder_twitter_circle_black_107155.svg" loading="lazy" alt="Small circle Twitter icon" width={30} className="af-class-social-media-icon" /></a>
                    <a href="https://t.me/suckelonscock" target="_blank" className="af-class-social-media-link af-class-footer-soc w-inline-block"><img src="images/telegram-black.svg" loading="lazy" alt="Small circle Telegram icon" height={24} className="af-class-social-media-icon" /></a>
                    <a href="https://www.reddit.com/r/SuckElonsCock/" target="_blank" className="af-class-social-media-link af-class-footer-soc w-inline-block"><img src="images/reddit-round.svg" loading="lazy" height={24} alt="Small circle Reddit icon" className="af-class-social-media-icon" /></a>
                    <a href="https://www.tiktok.com/@suckelonscoc?lang=en" target="_blank" className="af-class-social-media-link af-class-footer-soc w-inline-block"><img src="images/tiktok-round.svg" loading="lazy" alt="Small circle TikTok icon" height={24} className="af-class-social-media-icon" /></a>
                    <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link af-class-footer-soc w-inline-block"><img src="images/facebook.svg" loading="lazy" alt="Small circle Facebook icon" className="af-class-social-media-icon" /></a>
                    <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-social-media-link af-class-footer-soc w-inline-block"><img src="images/YT.svg" loading="lazy" alt="Small circle Facebook icon" height={28} width={24} className="af-class-social-media-icon" /></a>
                  </div>
                </div>
                <div className="af-class-palace-club">
                  <div className="af-class-grey-text af-class-white af-class-palace-club af-class-text-gradient-2 af-class-palace"><strong className="af-class-bold-text-2 af-class-peoples-sec">#ThePeoplesSEC</strong></div>
                </div>
                <div data-w-id="c8462666-1c04-4391-a7d5-15b610290b55" style={{opacity: 0}} className="af-class-footer-copyright af-class-_2021">
                  <div className="af-class-grey-text af-class-white af-class-_20211">Suck Elon's Cock © <strong className="af-class-bold-text-5">2021</strong></div>
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