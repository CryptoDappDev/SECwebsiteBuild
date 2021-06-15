/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import ConnectWalletButtonView from './ConnectWalletButtonView'
import ConnectToWalletNavView from './ConnectToWalletNavView'
import TweetSecView from './TweetSecView'
import TweetMemeView from './TweetMemeView'
import CopyButton1View from './CopyButton1View'
import BoardingPassPurchaseView from './BoardingPassPurchaseView'
import CoinPurchaseView from './CoinPurchaseView'
import GoonView from './GoonView'
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
    htmlEl.dataset['wfPage'] = '60c2e2e861ff13cd0ca95ef9'
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
            <div id="body-wrapper" className="af-class-div-block-30">
              <div data-collapse="medium" data-animation="default" data-duration={400} data-w-id="c4c9dea6-1369-4332-0f22-987670d1d687" style={{opacity: 0}} role="banner" className="af-class-fixed-nav-3 w-nav">
                <div className="af-class-gradient-border" />
                <div className="af-class-container af-class-nav-container w-container">
                  <a href="#top" className="af-class-brand-3 w-nav-brand"><img src="images/Sec_Wordstamp_V3.png" loading="lazy" width={150} sizes="(max-width: 479px) 78vw, 120.00000762939453px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" className="af-class-image-16" /></a>
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <div className="af-class-nav-cta-button-2 af-class-mobile">
                      <ConnectWalletButtonView.Controller />
                      <a href="#limited-edition-nfts-section" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header w-button"><strong>LIMITED DROPS</strong></a>
                    </div>
                    <a href="#SECTIONECOSLUGGGGGGGGG" id="new-eco" className="af-class-nav-link-3 af-class-eco-nav w-inline-block">
                      <div className="af-class-nav-link-text">ECOSYSTEM</div>
                    </a>
                    <a href="#" className="af-class-nav-link-3 af-class-moonmap w-inline-block">
                      <div className="af-class-nav-link-text">Moonmap</div>
                    </a>
                    <a href="#onlymemessectionnslug" className="af-class-nav-link-3 w-inline-block">
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
                    <ConnectToWalletNavView.Controller />
                    <a href="#limited-edition-nfts-section" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header w-button"><strong>LIMITED DROPS</strong></a>
                  </div>
                  <div className="af-class-menu-button-3 w-nav-button"><img src="images/menu-icon-white.svg" loading="lazy" alt className="af-class-image-17" /></div>
                </div>
              </div>
              <div data-w-id="fa94892c-6481-a468-d867-d461dc3c76b6" style={{display: 'none'}} className="af-class-button--back-to-top">
                <a href="#top" className="w-inline-block"><img src="images/arrow.svg" loading="lazy" width={50} alt className="af-class-back-to-top-arrow" /></a>
              </div>
              <div data-w-id="70fe3ea7-0e17-1190-dddb-817617726b6d" style={{display: 'flex'}} className="af-class-preloader"><img src="images/Buy_Sec_Loader_Desktop.gif" loading="eager" width={960} alt="Buy SEC Preloader with suck elon's cock coin, custom loader, and animated word stamp." className="af-class-buy-sec-loader" /><img src="images/loader.gif" loading="lazy" width={250} alt="Custom $SEC bubble loader." className="af-class-preloader-bar" /><img src="images/Coin_spin_isolated_v2_400.gif" loading="eager" alt="Spinning SEC Coin" className="af-class-big-spinning-coin" /></div>
              <main id="top" data-w-id="c50d35a4-afc5-52b4-4df2-051165d5d057" className="af-class-section-hero">
                <div data-w-id="34d76856-e065-1538-c253-4e4f551a0272" style={{opacity: 0}} className="af-class-moon-gif">
                  <div className="af-class-moon-html w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/ezgif.com-gif-maker.gif" alt="Rotating moon with SEC coins" /></div>
                </div>
                <div data-w-id="f963aa16-77ac-8d79-3777-25fb3b43f30d" style={{opacity: 0}} className="af-class-div-block-40"><img src="images/astro.grad.png" loading="lazy" width={540} sizes="25vw" srcSet="images/astro.grad-p-500.png 500w, images/astro.grad-p-800.png 800w, images/astro.grad.png 1080w" alt className="af-class-elon" /></div>
                <div className="af-class-main-hero-container">
                  <div data-w-id="e076ae25-c476-d6c4-9924-ce324b6a6527" style={{opacity: 0}} className="af-class-hero-content"><img src="images/SuckElonsCock_LogoType_V1_halfres.gif" loading="lazy" width={700} style={{opacity: 0}} alt="Suck Elon's Cock suckelonscock main logo stamp" data-w-id="892b798d-6819-b838-1025-f37200c7e2fc" className="af-class-main-stamp" />
                    <TweetSecView.Controller />
                    <div data-w-id="cfa80b7a-bd8c-5a84-9535-8a581e58c152" style={{opacity: 0}} className="af-class-download-buttons af-class-hero-download-buttons">
                      <div className="af-class-download-button af-class-buy">
                        <a href="#buybuybuy" className="af-class-button af-class-hero w-inline-block"><img src="images/Apple-Icon.svg" loading="lazy" alt className="af-class-download-button-icon" />
                          <div>BUY <em>$SEC</em></div>
                        </a>
                      </div>
                      <div className="af-class-download-button af-class-learn-more">
                        <a href="#SECTIONECOSLUGGGGGGGGG" className="af-class-button af-class-learn af-class-hero w-inline-block"><img src="images/Apple-Icon.svg" loading="lazy" alt className="af-class-download-button-icon" />
                          <div className="af-class-text-block-12">LEARN MORE</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <div data-w-id="895e3aeb-bc03-a4de-1bf6-e2f9e06c5b80" style={{display: 'none'}} className="af-class-small-container">
                <div className="af-class-hero-text-sticky">
                  <div className="af-class-hero-text-holder">
                    <div className="af-class-hero-text-holder-1"><img src="images/Buy.png" loading="lazy" width={410} sizes="(max-width: 767px) 100vw, 410.0000305175781px" srcSet="images/Buy-p-500.png 500w, images/Buy-p-800.png 800w, images/Buy.png 820w" alt />
                      <h1 className="af-class-hero-text af-class-_1">BUY</h1>
                    </div>
                    <div className="af-class-hero-text-holder-2"><img src="images/Sec_Wordstamp_V3.png" loading="lazy" width={500} sizes="(max-width: 767px) 100vw, (max-width: 991px) 497.76043701171875px, (max-width: 1279px) 50vw, 500.0000305175781px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" /></div>
                  </div>
                </div>
                <div data-w-id="08a4f49f-daee-82d9-5871-e852a62377d9" style={{display: 'none', opacity: 0}} className="af-class-hero-product-demo">
                  <div className="af-class-product-phone-image-container af-class-clouds"><img src="images/grad.Clouds-BG.png" loading="eager" sizes="(max-width: 479px) 100vw, 90vw" srcSet="images/grad.Clouds-BG-p-500.png 500w, images/grad.Clouds-BG-p-800.png 800w, images/grad.Clouds-BG-p-1080.png 1080w, images/grad.Clouds-BG.png 1920w" alt className="af-class-image-3" /></div>
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
              <div data-w-id="e7900c2b-f352-bc3f-9059-0de98acb9930" style={{display: 'none'}} className="af-class-section af-class-second">
                <div data-w-id="2ca3e9bb-1e42-e5d9-5033-787d50362b30" data-animation-type="lottie" data-src="documents/CoinRolling_V2.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="3.3333333333333335" data-duration={0} className="af-class-lottie-animation-6" />
                <div className="af-class-container af-class-needtohide">
                  <div className="af-class-customers-panel">
                    <div className="af-class-text-holder">
                      <div className="af-class-text-center">
                        <div id="emptyfeaturelist" className="af-class-fade-in-on-scroll">
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
              <div data-w-id="78ca0121-dce9-06b8-e00b-6f59ae1ac857" style={{opacity: 0, display: 'none'}} className="af-class-gradientborder" />
              <section id="SECTIONECOSLUGGGGGGGGG" data-w-id="915aa8c7-5aca-7b30-6198-454a7174844e" style={{display: 'none'}} className="af-class-section af-class-light-blue-bg af-class-features">
                <div className="af-class-container af-class-eco">
                  <section id="new-eco-2" data-w-id="915aa8c7-5aca-7b30-6198-454a71748463" style={{opacity: 0}} className="af-class-text-center af-class-ecosystem">
                    <div className="af-class-fade-in-on-scroll af-class-ecoo-text">
                      <h2 className="af-class-text-gradient-2 af-class-sec-ecosystem-header"><span className="af-class-text-span-3">$SEC</span>&nbsp;Ecosystem</h2>
                    </div>
                    <div className="af-class-text-container">
                      <div className="af-class-fade-in-on-scroll">
                        <p id="new-eco-3" className="af-class-paragraph"><span className="af-class-represent-title">$SEC&nbsp;is a symbol of financial freedom through decentralization and degeneracy.</span></p>
                      </div>
                    </div>
                  </section>
                  <div className="w-layout-grid af-class-feature-grid">
                    <div id="w-node-_7b19d13e-0e8d-2369-5abf-e24fedfaa268-0ca95ef9" data-w-id="7b19d13e-0e8d-2369-5abf-e24fedfaa268" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-what-is-sec">
                      <div className="af-class-card-item-content af-class-what-it-is">
                        <h4 className="af-class-text-gradient-1 af-class-whatt-is-it">WHAT IS <span className="af-class-text-span-5">$SEC</span>?</h4>
                        <p className="af-class-what-is-sec af-class-nonhover"><strong><em>$SEC</em></strong> is the currency of the <strong>SEC Ecosystem</strong>, a community of artists, creators, developers, and collectors building a community on the metaverse. &nbsp;Our first product, <strong>OnlyMemes</strong>, is an NFT market aimed at disrupting legacy social media. &nbsp;We aim to usher web3 into the popular consciousness through the power of community, memes, and cypherpunk ideals.<br /><strong><br />$SEC</strong> is an ERC20 Token built on the ETH blockchain. It was born from Elon Musk's Legendary <a href="https://twitter.com/elonmusk/status/1278764736876773383?lang=en" target="_blank">tweet</a> at the <a href="https://en.wikipedia.org/wiki/U.S._Securities_and_Exchange_Commission" target="_blank">SEC</a> (Securities and Exchange Commission), an institution which perpetuates a corrupt financial system.<br /><br />Unlike fiat currencies, <strong><em>$SEC</em></strong>&nbsp;is a freedom movement through decentralization and degeneracy. Each transaction carries a <strong>4.20%</strong> tax, which is redistributed among existing <strong><em>$SEC </em></strong>holders. You will grow and earn rewards daily just for holding.</p>
                      </div>
                      <div className="af-class-div-block-16">
                        <div data-w-id="7a39b6b8-bf7d-cc70-a32f-cd6f00a81888" data-animation-type="lottie" data-src="documents/JoinTheRevolution.json" data-loop={1} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration="3.2" data-duration="4.2" />
                      </div>
                    </div>
                    <div id="w-node-_628315c7-9285-9cb1-4712-9cee2615c32b-0ca95ef9" data-w-id="628315c7-9285-9cb1-4712-9cee2615c32b" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-mememe af-class-meme">
                      <div className="af-class-div-block-31"><img src="images/OnlyMemes-Logo-TM-V3.png" loading="lazy" width={420} sizes="(max-width: 767px) 86vw, 420.0000305175781px" srcSet="images/OnlyMemes-Logo-TM-V3-p-500.png 500w, images/OnlyMemes-Logo-TM-V3-p-1600.png 1600w, images/OnlyMemes-Logo-TM-V3-p-2000.png 2000w, images/OnlyMemes-Logo-TM-V3-p-2600.png 2600w, images/OnlyMemes-Logo-TM-V3-p-3200.png 3200w, images/OnlyMemes-Logo-TM-V3.png 3893w" alt /></div>
                      <div data-w-id="e4f0af50-e18a-97ff-f668-46d0126fa217" data-animation-type="lottie" data-src="documents/data.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="4.833333333333333" data-duration={0} data-ix2-initial-state={0} />
                      <div>
                        <div className="af-class-div-block-43">
                          <a href="https://twitter.com/elonmusk/status/1276418907968925696" target="_blank" className="af-class-link-block-5 w-inline-block"><img src="images/image-5.png" loading="lazy" sizes="100vw" srcSet="images/image-5-p-500.png 500w, images/image-5-p-800.png 800w, images/image-5-p-1080.png 1080w, images/image-5-p-1600.png 1600w, images/image-5.png 1778w" alt /></a>
                        </div>
                        <TweetMemeView.Controller />
                      </div>
                      <div className="af-class-card-item-content af-class-meme-market-card">
                        <div className="af-class-fade-in-on-scroll">
                          <p className="af-class-paragraph-2"><strong>OnlyMemes</strong> is a <strong><em>$SEC</em></strong>&nbsp;powered decentralized platform for content creation. <br /><br />Users will be able to trade, create, and collect community memes powered by the <strong><em>$SEC</em></strong>&nbsp;ecosystem. <br /><br />Stay tuned for our official launch. If you would like to be a beta tester- pick up the all access <strong><em>BOARDING&nbsp;PASS</em></strong>&nbsp;from the <strong><em>$SEC</em></strong>&nbsp;<strong>Limited Edition NFTs.</strong></p>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-bf82d6d8-19d5-7d71-8ac6-e7bb3b408754-0ca95ef9" data-w-id="bf82d6d8-19d5-7d71-8ac6-e7bb3b408754" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-tools">
                      <div className="af-class-card-item-content af-class-tools">
                        <div className="af-class-card-feature-center af-class-tool-center">
                          <a href="https://app.sushi.com/swap" className="af-class-link-block-4 w-inline-block">
                            <div className="af-class-fade-in-on-scroll af-class-toool"><img src="images/susssshi.png" loading="lazy" srcSet="images/susssshi-p-500.png 500w, images/susssshi.png 512w" sizes="(max-width: 479px) 55.000003814697266px, 112.98611450195312px" alt="Sushi swap icon" className="af-class-card-feature-icon af-class-tool" /></div>
                            <div className="af-class-fade-in-on-scroll">
                              <h6 className="af-class-heading">Sushi Swap</h6>
                            </div>
                            <div className="af-class-fade-in-on-scroll">
                              <p className="af-class-represent-title af-class-rep-tool">Swap ETH for <strong><em>$SEC</em></strong>.</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_0d566606-fd33-a3ac-c52c-ded5bb91b946-0ca95ef9" data-w-id="0d566606-fd33-a3ac-c52c-ded5bb91b946" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-tools">
                      <div className="af-class-card-item-content af-class-tools">
                        <div className="af-class-card-feature-center af-class-tool-center">
                          <a href="https://www.dextools.io/app/sushiswap/pair-explorer/0xfffae206a0c17c4804f04af3880ff8a9dea39210" target="_blank" className="af-class-link-block-4 af-class-toools w-inline-block">
                            <div className="af-class-fade-in-on-scroll af-class-toool"><img src="images/image.png" loading="lazy" alt="DEXtools logo" className="af-class-card-feature-icon af-class-tool" /></div>
                            <div className="af-class-fade-in-on-scroll">
                              <h6 className="af-class-heading-2">Dextools</h6>
                            </div>
                            <div className="af-class-fade-in-on-scroll">
                              <p className="af-class-represent-title af-class-rep-tool">Chart and contract.</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_7bea1a70-4116-a7db-c374-fff947065047-0ca95ef9" data-w-id="7bea1a70-4116-a7db-c374-fff947065047" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-tools">
                      <div className="af-class-card-item-content af-class-tools">
                        <div className="af-class-card-feature-center af-class-tool-center">
                          <a href="https://zerion.io/" target="_blank" className="af-class-link-block-4 af-class-toools w-inline-block">
                            <div className="af-class-fade-in-on-scroll af-class-toool"><img src="images/zerion.png" loading="lazy" sizes="(max-width: 479px) 55.000003814697266px, 112.98611450195312px" srcSet="images/zerion-p-500.png 500w, images/zerion-p-800.png 800w, images/zerion.png 1024w" alt="Zerion wallet logo" className="af-class-card-feature-icon af-class-tool" /></div>
                            <div className="af-class-fade-in-on-scroll">
                              <h6 className="af-class-heading-3">Zerion</h6>
                            </div>
                            <div className="af-class-fade-in-on-scroll">
                              <p className="af-class-represent-title af-class-rep-tool">Check ur <strong><em>$SEC</em></strong> worth.</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_1748d82b-49c0-8078-53ed-77133df041a2-0ca95ef9" data-w-id="1748d82b-49c0-8078-53ed-77133df041a2" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-contract-address">
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
                    <div id="socialss" data-w-id="27b10c2b-faaf-eb26-6218-b3d0e2a19fad" style={{opacity: 0}} className="af-class-card-item af-class-light af-class-socials w-node-_27b10c2b-faaf-eb26-6218-b3d0e2a19fad-0ca95ef9">
                      <div className="af-class-card-item-content af-class-socials">
                        <div className="af-class-card-feature-center af-class-socials">
                          <div className="af-class-fade-in-on-scroll">
                            <h6 className="af-class-text-gradient-1 af-class-social">Join us.</h6>
                          </div>
                          <div className="af-class-fade-in-on-scroll af-class-socials">
                            <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/color.YT.svg" loading="lazy" alt="YOUTUBE" className="af-class-card-feature-icon" /></a>
                            <a href="https://www.reddit.com/r/SuckElonsCock/" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/reddit.color.svg" loading="lazy" alt="REDDIT" className="af-class-card-feature-icon" /></a>
                            <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/facebook.color.svg" loading="lazy" alt="FACEBOOK" className="af-class-card-feature-icon" /></a>
                            <a href="https://t.me/suckelonscock" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/color.telegram.svg" loading="lazy" alt="TELEGRAM" className="af-class-card-feature-icon" /></a>
                            <a href="https://twitter.com/suckelonscock?lang=en" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/twitter.color.svg" loading="lazy" height={70} alt="TWITTER" className="af-class-card-feature-icon af-class-tweeter" /></a>
                            <a href="https://www.instagram.com/suckelonscock" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/color.ig.svg" loading="lazy" alt="INSTAGRAM" className="af-class-card-feature-icon" /></a>
                            <a href="https://discord.gg/HpYE8SPQhA" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/discord.color.svg" loading="lazy" alt="DISCORD" className="af-class-card-feature-icon" /></a>
                            <a href="https://www.tiktok.com/@onlymemes.sec?lang=en" target="_blank" className="af-class-join-us-socials w-inline-block"><img src="images/color.tiktok.svg" loading="lazy" alt="TIKTOK" className="af-class-card-feature-icon" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-id="37d6c78a-e32d-9352-eb0d-1e2548266d5f" data-animation-type="lottie" data-src="documents/CoinRolling_V2.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="3.3333333333333335" data-duration={0} className="af-class-lottie-animation-7" />
              </section>
              <div className="af-class-gradientborder" />
              <div id="About" className="af-class-section af-class-testing">
                <div className="af-class-container af-class-test">
                  <div className="w-layout-grid af-class-grid-6-col">
                    <div id="w-node-_64ab14ec-0a71-9abe-100c-83874d852302-0ca95ef9" className="af-class-trusted-content">
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
                    <div id="w-node-_1511bf1a-c884-944b-f323-a3f0ea7187b5-0ca95ef9" className="af-class-trusted-content af-class-trusted-list">
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
              <section id="limited-edition-nfts-section" data-w-id="3b85f699-c949-f7e1-8df4-af4ae38e2f0c" style={{display: 'none'}} className="af-class-section af-class-dark">
                <div className="af-class-container">
                  <div className="w-layout-grid af-class-grid-10-columns">
                    <div id="w-node-ece89d93-2df3-9c66-994e-a99360ef72ee-0ca95ef9" className="af-class-content">
                      <div data-w-id="3b85f699-c949-f7e1-8df4-af4ae38e2f0e" style={{opacity: 0}} className="af-class-text-center af-class-lliimiited-drops">
                        <div className="af-class-fade-in-on-scroll">
                          <h2 className="af-class-text-gradient-2 af-class-limited-drops">Limited Edition NFTs</h2>
                        </div>
                        <div className="af-class-text-container" />
                      </div>
                      <div className="w-layout-grid af-class-grid-6-col">
                        <div id="w-node-_74cbd762-9528-e95b-cab8-025c6f989808-0ca95ef9" data-w-id="74cbd762-9528-e95b-cab8-025c6f989808" style={{opacity: 0}} className="af-class-card-item af-class-special-nft af-class-desktop">
                          <div className="af-class-card-item-content">
                            <div data-w-id="74cbd762-9528-e95b-cab8-025c6f98980a" className="af-class-card-iphone af-class-opensea">
                              <div data-w-id="4bb7ef97-d783-3bfa-d0e6-2abaf2753e17" data-animation-type="lottie" data-src="documents/boarding_pass_featured_360_v2.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="3.3666666666666667" data-duration={0} className="af-class-lottie-animation-5" />
                            </div>
                            <div>
                              <div className="af-class-text-gradient-3 af-class-feature-nft-text">FEATURED DROP</div>
                              <div>
                                <div className="af-class-text-gradient-1 af-class-feature-sub-text">$SEC ALL ACCESS BOARDING PASS</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="w-node-_1fddc060-866b-d6d5-cf19-68b14a53a83d-0ca95ef9" data-w-id="1fddc060-866b-d6d5-cf19-68b14a53a83d" style={{opacity: 0}} className="af-class-card-item af-class-special-nft af-class-mobbbile">
                          <div className="af-class-card-item-content">
                            <div data-w-id="1fddc060-866b-d6d5-cf19-68b14a53a83f" className="af-class-card-iphone af-class-opensea"><img src="images/Boarding-Pass-web_preview.gif" loading="lazy" alt />
                              <div>
                                <div className="af-class-text-gradient-3 af-class-feature-nft-text">FEATURED DROP</div>
                                <div>
                                  <div className="af-class-text-gradient-1 af-class-feature-sub-text">$SEC ALL ACCESS BOARDING PASS</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="w-node-_8502412a-6474-098f-1e09-76bce2a84c58-0ca95ef9" data-w-id="8502412a-6474-098f-1e09-76bce2a84c58" style={{opacity: 0}} className="af-class-card-item af-class-limited-nft">
                          <div className="af-class-card-item-content">
                            <div data-w-id="8502412a-6474-098f-1e09-76bce2a84c5a" className="af-class-card-iphone">
                              <div data-w-id="4308bbc9-e16a-f37a-2b10-9810f2383b67" data-animation-type="lottie" data-src="documents/Boarding_Pass_Preview_IN.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="1.1" data-duration={0} />
                              <div data-w-id="43d9a144-de75-a6f8-0c5e-19b5dd612d50" data-animation-type="lottie" data-src="https://d3e54v103j8qbb.cloudfront.net/plugins/Animation/assets/wf-placeholder.cd67a2c2ba.json" data-loop={0} data-direction={1} data-autoplay={1} data-is-ix2-target={0} data-renderer="svg" data-default-duration="4.08" data-duration={0} /><img src="images/Boarding_Pass_NFT_Holder_Web_Preview_v1.png" loading="lazy" sizes="100vw" srcSet="images/Boarding_Pass_NFT_Holder_Web_Preview_v1-p-500.png 500w, images/Boarding_Pass_NFT_Holder_Web_Preview_v1.png 588w" alt className="af-class-card-iphone-image" />
                              <div className="af-class-card-iphone-overlay" />
                              <div className="af-class-card-phone-image-container"><img src="images/Boarding_Pass_NFT_Web_Preview.png" loading="lazy" sizes="100vw" srcSet="images/Boarding_Pass_NFT_Web_Preview-p-500.png 500w, images/Boarding_Pass_NFT_Web_Preview.png 588w" alt className="af-class-width-pct" /></div>
                              <div />
                            </div>
                            <div className="af-class-text-center af-class-boarding-pass">
                              <div className="af-class-fade-in-on-scroll af-class-ftokennnp">
                                <h4 className="af-class-white-text">BOARDING PASS</h4>
                              </div>
                              <div className="af-class-fade-in-on-scroll">
                                <p className="af-class-light-grey af-class-nft">The <strong>BOARDING PASS </strong>grants you exclusive access and VIP&nbsp;treatment within the $SEC&nbsp;ecosystem.<strong /></p>
                              </div>
                            </div>
                            <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase">
                              <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="images/ETH-logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                                <div className="af-class-text-block-11">0.5</div>
                              </div>
                              <BoardingPassPurchaseView.Controller />
                            </div>
                            <div className="af-class-div-block-42">
                              <div className="af-class-text-block-15">
                                <a href="https://opensea.io/accounts/SuckElonsCock" target="_blank" className="af-class-opensealink">View on OpenSea</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="w-node-_3b85f699-c949-f7e1-8df4-af4ae38e2f15-0ca95ef9" data-w-id="3b85f699-c949-f7e1-8df4-af4ae38e2f15" style={{opacity: 0}} className="af-class-card-item af-class-limited-nft">
                          <div className="af-class-card-item-content">
                            <div data-w-id="e029fe69-e449-4a9b-5f1c-8ef44a11cecd" className="af-class-card-iphone af-class-coin"><img src="images/SEC_founders_token_preview.gif" loading="lazy" alt className="af-class-image-19" /></div>
                            <div className="af-class-text-center af-class-coin-nft">
                              <div className="af-class-fade-in-on-scroll af-class-ftokennnp">
                                <h4 className="af-class-white-text">FOUNDER'S TOKEN</h4>
                              </div>
                              <div className="af-class-fade-in-on-scroll af-class-sec-coin-text">
                                <p className="af-class-light-grey af-class-nft">The Founders Token is proof you were<br />among the first to hold <strong><em>$SEC</em></strong>. Holding the Founders Token unlock special features.<br /></p>
                              </div>
                            </div>
                            <div id="purchase-coin-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase">
                              <div id="purchase-coin-button-1" className="af-class-nft-price-div"><img src="images/ETH-logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                                <div className="af-class-text-block-11">0.05</div>
                              </div>
                              <CoinPurchaseView.Controller />
                            </div>
                            <div className="af-class-div-block-42">
                              <div className="af-class-text-block-15">
                                <a href="https://opensea.io/accounts/SuckElonsCock" target="_blank" className="af-class-opensealink">View on OpenSea</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section id="onlymemessectionnslug" data-w-id="f7da196c-9b44-506f-e081-647209164471" style={{opacity: 0}} className="af-class-onlymemessection">
                    <div className="af-class-dont-take-our-word-title">
                      <div className="af-class-fade-in-on-scroll">
                        <div className="af-class-div-block-21"><img src="images/OnlyMemes-Logo-TM-V3.png" loading="lazy" sizes="(max-width: 479px) 86vw, (max-width: 767px) 73vw, (max-width: 991px) 74vw, (max-width: 1279px) 59vw, 770.5729370117188px" width="1460.5" srcSet="images/OnlyMemes-Logo-TM-V3-p-500.png 500w, images/OnlyMemes-Logo-TM-V3-p-1600.png 1600w, images/OnlyMemes-Logo-TM-V3-p-2000.png 2000w, images/OnlyMemes-Logo-TM-V3-p-2600.png 2600w, images/OnlyMemes-Logo-TM-V3-p-3200.png 3200w, images/OnlyMemes-Logo-TM-V3.png 3893w" alt className="af-class-image-21" />
                          <div className="af-class-text-block-6"><strong className="af-class-bold-text-6">Meme Markplace</strong></div>
                        </div>
                      </div>
                    </div>
                    <div data-w-id="994e1b81-044d-149c-a619-f3caa5e5856c" style={{opacity: 0}} className="w-layout-grid af-class-grid-testimonial">
                      <div id="w-node-_93449bda-343f-6d50-51cc-3de5d24e3b53-0ca95ef9" data-w-id="93449bda-343f-6d50-51cc-3de5d24e3b53" className="af-class-card-item af-class-memes-coming-soon af-class-_11">
                        <div className="af-class-card-item-content af-class-memecard">
                          <div className="af-class-fade-in-on-scroll">
                            <div className="af-class-div-block-25">
                              <div data-w-id="a26dc40e-0bda-b5fd-04a6-62dddb057cf4" data-animation-type="lottie" data-src="documents/data.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="4.833333333333333" data-duration={0} data-ix2-initial-state={0} className="af-class-lottie-animation" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="onlymemes.goon" data-w-id="74a5793b-2ee3-ba61-31c3-fdbb738cd499" className="af-class-card-item af-class-memes-coming-soon af-class-_11 af-class-_1 af-class-_5 w-node-_74a5793b-2ee3-ba61-31c3-fdbb738cd499-0ca95ef9">
                        <div className="af-class-div-block-44">
                          <div className="af-class-text-block-16">The $GOON&nbsp;OnlyMemes Bodega</div>
                        </div>
                        <div className="af-class-card-item-content af-class-memecard">
                          <div className="af-class-fade-in-on-scroll">
                            <div className="af-class-div-block-25"><img src="images/GrSxEb2Q.png" loading="lazy" sizes="(max-width: 479px) 80vw, (max-width: 767px) 87vw, (max-width: 991px) 88vw, (max-width: 1279px) 72vw, 933.2291870117188px" srcSet="images/GrSxEb2Q-p-500.png 500w, images/GrSxEb2Q-p-800.png 800w, images/GrSxEb2Q-p-1080.png 1080w, images/GrSxEb2Q-p-1600.png 1600w, images/GrSxEb2Q.png 1920w" alt className="af-class-image-25" /></div>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-cb3dd26c-13f3-c714-c6ca-1cac6408d6f4-0ca95ef9" data-w-id="cb3dd26c-13f3-c714-c6ca-1cac6408d6f4" className="af-class-card-item af-class-memes-coming-soon af-class-_11 af-class-_1 af-class-_23">
                        <div className="af-class-div-block-44">
                          <div className="af-class-text-block-16 af-class-_1">Crypto Messiah Bobblehead</div>
                        </div>
                        <div className="af-class-card-item-content af-class-memecard">
                          <div className="af-class-fade-in-on-scroll">
                            <div className="af-class-div-block-25" />
                          </div>
                          <div className="af-class-div-block-45">
                            <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonBobbleHead_800x800_Slower+(1).gif" alt="goon" /></div>
                          </div>
                          <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                            <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="images/ETH-logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                              <div className="af-class-text-block-11">0.5</div>
                            </div>
                            <GoonView.Controller />
                          </div>
                          <div className="af-class-div-block-42">
                            <div className="af-class-text-block-15">
                              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597163426490351626" target="_blank" className="af-class-opensealink">View on OpenSea</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section id="subscribe-form" className="af-class-subscribe-form-2">
                      <div className="af-class-centered-container w-container">
                        <h2 className="af-class-text-gradient-3 af-class-subform">INSIDER&nbsp;INFO</h2>
                        <p className="af-class-paragraph-7">Be the first to know when <strong>OnlyMemes™ </strong>beta release is live.</p>
                        <div className="w-form">
                          <form id="email-form" name="email-form" data-name="Email Form" className="af-class-subscribe-form-flex-2">
                            <div className="af-class-subscribe-form-input-wrapper-2"><input type="email" className="af-class-subscribe-form-input w-input" maxLength={256} name="Subscriber-Email" data-name="Subscriber Email" placeholder="enter your email" id="Subscriber-Email" required /></div><input type="submit" defaultValue="Subscribe" data-wait="Please wait..." className="af-class-submit-button w-button" />
                          </form>
                          <div className="w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                          </div>
                          <div className="w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </section>
                </div>
              </section>
              <div id="buybuybuy" data-w-id="a136e70e-a0ad-9d01-ec68-2e537ec8b5de" style={{opacity: 0, display: 'none'}} className="af-class-buysec-section">
                <div className="af-class-phone-holder"><img src="images/sushimeta_phones_V3.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 57vw, 565px" width={565} srcSet="images/sushimeta_phones_V3-p-500.png 500w, images/sushimeta_phones_V3-p-800.png 800w, images/sushimeta_phones_V3-p-1080.png 1080w, images/sushimeta_phones_V3-p-1600.png 1600w, images/sushimeta_phones_V3.png 1789w" alt className="af-class-image-24" /></div>
                <div id="jump-tp-buy" data-w-id="a136e70e-a0ad-9d01-ec68-2e537ec8b5df" style={{opacity: 0}} className="af-class-container af-class-how-to-buy-container">
                  <div className="af-class-div-block-24">
                    <div className="af-class-how-to-buy-sec-container">
                      <div className="af-class-buy-sec-animation">
                        <div data-w-id="921d7de2-64db-09e9-db67-08b5a839ae68" data-animation-type="lottie" data-src="documents/BuySec.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="1.9" data-duration={0} />
                      </div>
                      <div className="af-class-div-block-38">
                        <div className="af-class-text-gradient-1 af-class-bottombuy">TRADE <em>$SEC</em> ON <br />MOBILE OR DESKTOP</div>
                      </div>
                      <div className="af-class-div-block-35">
                        <a href="https://app.sushi.com/" className="w-inline-block"><img src="images/susssshi.png" loading="lazy" height={60} width={60} srcSet="images/susssshi-p-500.png 500w, images/susssshi.png 512w" sizes="(max-width: 479px) 42vw, (max-width: 1439px) 60.000003814697266px, 100vw" alt /></a>
                        <div className="af-class-plus"><img src="images/plus.png" loading="lazy" height={25} width={25} alt /></div>
                        <a href="https://metamask.io/index.html" target="_blank" className="w-inline-block"><img src="images/metamask-logo.png" loading="lazy" height={60} width={60} alt /></a>
                      </div>
                      <div className="af-class-div-block-39">
                        <div className="af-class-text-gradient-1 af-class-bottombuy">DOWNLOAD METAMASK</div>
                      </div>
                      <div className="af-class-how-to-buy-app-icon-holder">
                        <div className="af-class-how-to-buy-app-icon">
                          <a href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202" target="_blank" className="w-inline-block"><img src="images/app-store.svg" loading="lazy" width={40} alt /></a>
                        </div>
                        <div className="af-class-how-to-buy-app-icon">
                          <a href="https://metamask.app.link/bxwkE8oF99" target="_blank" className="w-inline-block"><img src="images/android.svg" loading="lazy" width={40} alt /></a>
                        </div>
                        <div className="af-class-how-to-buy-app-icon">
                          <a href="https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn" className="w-inline-block"><img src="images/chrome.svg" loading="lazy" width={40} alt /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-div-block-23">
                    <div className="af-class-copy-contract-text">
                      <div className="af-class-text-block-3"><strong className="af-class-bold-text-4 af-class-represent-title af-class-class">verified <em>$SEC</em>&nbsp;Contract address:</strong></div>
                    </div>
                    <div className="af-class-div-block-41">
                      <CopyButton2View.Controller />
                    </div>
                    <div className="af-class-download-buttons af-class-mobile-vertical af-class-small">
                      <div className="af-class-download-button af-class-sushi">
                        <a href="https://app.sushi.com/" target="_blank" className="af-class-button af-class-exclusive af-class-howtoobuyy w-inline-block"><img src="images/Apple-Icon.svg" loading="lazy" alt className="af-class-download-button-icon" />
                          <div className="af-class-text-block-10">TRADE <em>$SEC</em></div>
                        </a>
                      </div>
                      <div className="af-class-trade-sec-butt-holder">
                        <a href="https://youtu.be/RNwPNciknlU" className="af-class-tradesec w-button"><span className="af-class-text-gradient-1 af-class-trade-sec"><em>HOW TO</em></span></a>
                      </div>
                    </div>
                  </div>
                  <div className="w-layout-grid af-class-grid-6-col af-class-hidden" />
                </div>
              </div>
              <div data-w-id="0c3abcc3-1f0e-90e3-c240-a8406e383f3c" style={{display: 'none'}} className="af-class-buy-sec-banner"><img src="images/BUY_SEC_KINETIC_TYPE_BANNER-1-v2.gif" loading="lazy" alt="Looping kinetic buy $SEC banner" className="af-class-image-2" /></div>
              <div data-w-id="49e7c5c9-e43d-f54d-cc39-c2822ce13149" style={{display: 'none'}} className="af-class-footer-2">
                <div className="af-class-div-block-29">
                  <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/ElonSmoking_v3.gif" alt="Diamond Cock Rocket, SEC going to the moon" /></div>
                </div>
                <div>
                  <div className="af-class-grey-text-2 af-class-white af-class-palace-club af-class-text-gradient-2 af-class-palace">#ThePeoplesSEC</div>
                </div>
                <div className="af-class-social-media-content af-class-desktop">
                  <div className="af-class-div-block-12">
                    <a href="https://www.tiktok.com/@suckelonscoc?lang=en" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961bf437ae8771_tiktok-round.svg" loading="lazy" width={24} height={24} alt="Small circle TikTok icon" className="af-class-social-media-icon" /></a>
                    <a href="https://twitter.com/suckelonscock?lang=en" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b39e8ae87c8_iconfinder_twitter_circle_black_107155.svg" loading="lazy" width={26} alt="Small circle Twitter icon" className="af-class-social-media-icon" /></a>
                    <a href="https://www.reddit.com/r/SuckElonsCock/" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b17abae8767_reddit-round.svg" loading="lazy" height={24} width={24} alt="Small circle Reddit icon" className="af-class-social-media-icon" /></a>
                    <a href="https://t.me/suckelonscock" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b1e4aae876b_telegram-black.svg" loading="lazy" width={24} height={24} alt="Small circle Telegram icon" className="af-class-social-media-icon" /></a>
                    <a href="https://www.instagram.com/suckelonscock" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b6317ae877b_IG..Circle.svg" loading="lazy" width="28.5" alt="Small circle Instagram icon" className="af-class-social-media-icon" /></a>
                    <a href="https://opensea.io/accounts/SuckElonsCock" className="af-class-social-media-link w-inline-block"><img src="images/New-Project.svg" loading="lazy" width={30} alt="Small circle Facebook icon" className="af-class-social-media-icon" /></a>
                    <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-social-media-link w-inline-block"><img src="images/YT.svg" loading="lazy" alt="Small circle Facebook icon" width={30} className="af-class-social-media-icon" /></a>
                    <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b454aae8762_facebook.svg" loading="lazy" alt="Small circle Facebook icon" className="af-class-social-media-icon" /></a>
                    <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b6340ae87a2_iconfinder_discord_18_5474122-svg%20(1).png" loading="lazy" width={28} alt="Small circle Facebook icon" className="af-class-social-media-icon" /></a>
                  </div>
                </div>
                <div data-w-id="49e7c5c9-e43d-f54d-cc39-c2822ce13166" style={{opacity: 0}} className="af-class-footer-copyright af-class-_2021">
                  <div className="af-class-grey-text-2 af-class-white af-class-_20211">Suck Elon's Cock © <strong className="af-class-bold-text-5">2021</strong></div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
            <style dangerouslySetInnerHTML={{__html: "\n.af-view, .af-view {\n    max-width: 100%;\n    overflow-x: hidden;\n}\n" }} />
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */