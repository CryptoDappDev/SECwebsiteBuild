/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import ConnectWalletButtonView from './ConnectWalletButtonView'
import ConnectToWalletNavView from './ConnectToWalletNavView'
import GoonView from './GoonView'
import GoonmaskView from './GoonmaskView'
import GoonledgenView from './GoonledgenView'
import GoonbowView from './GoonbowView'
import GoondipView from './GoondipView'
import GoontrippyView from './GoontrippyView'
import GoonposterView from './GoonposterView'
import Goon50View from './Goon50View'

const scripts = [
  { loading: fetch("https://kit.fontawesome.com/d97b87339f.js").then(body => body.text()), isAsync: false },
  { loading: Promise.resolve("function copy(){var e=document.getElementById(\"copyClipboard\");e.select(),e.setSelectionRange(0,99999),document.execCommand(\"copy\"),$(\"#copied-success\").fadeIn(800),$(\"#copied-success\").fadeOut(800)}"), isAsync: false },
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
    htmlEl.dataset['wfPage'] = '60c970eb1bbfb4920375a513'
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
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-fixed-nav-3 af-class-_1 w-nav">
              <div className="af-class-gradient-border" />
              <div className="af-class-container af-class-nav-container w-container">
                <a href="index.html" target="_blank" className="af-class-brand-3 af-class-_1 w-nav-brand"><img src="images/Sec_Wordstamp_V3.png" loading="lazy" width={150} sizes="120.00000762939453px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" className="af-class-image-16" /></a>
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <div className="af-class-nav-cta-button-2 af-class-mobile">
                    <ConnectWalletButtonView.Controller />
                    <a href="#" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header w-button"><strong>LIMITED DROPS</strong></a>
                  </div>
                  <a href="#" className="af-class-nav-link-3 af-class-moonmap w-inline-block">
                    <div className="af-class-nav-link-text">Moonmap</div>
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
                  <a href="#limited-edition-nfts-section" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header af-class-_1 w-button"><strong>LIMITED DROPS</strong></a>
                </div>
                <div className="af-class-menu-button-3 w-nav-button"><img src="images/menu-icon-white.svg" loading="lazy" alt className="af-class-image-17" /></div>
              </div>
            </div>
            <section id="limited-edition-nfts-section" className="af-class-section af-class-dark af-class-_1">
              <div className="af-class-div-block-55">
                <div className="af-class-text-gradient-3 af-class-subform af-class-_1">Introducing</div><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f34f3e90de73_OnlyMemes%20Logo%20TM%20V3.png" loading="lazy" width="1460.5" alt className="af-class-image-37" />
              </div>
              <div id="onlymemes.goon" className="af-class-card-item-2 af-class-_1 af-class-_2">
                <div className="af-class-div-block-54 af-class-_1"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f3274790de76_Goon%20(1).png" loading="lazy" alt className="af-class-image-36" />
                  <div className="af-class-text-block-18"><span className="af-class-text-span-7">Featured Profile:</span>&nbsp;The $GOON Bodega</div>
                </div>
              </div>
              <div className="af-class-container-2 af-class-_1">
                <section id="onlymemessectionnslug" className="af-class-onlymemessection-2 af-class-_3">
                  <div className="w-layout-grid af-class-grid-testimonial-2">
                    <div className="af-class-div-block-48">
                      <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_11 af-class-_3"><img src="images/photo_2021-06-09_00-06-33.jpg" loading="lazy" alt className="af-class-image-28" /></div>
                      <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_1">
                        <div className="af-class-div-block-54">
                          <div className="af-class-text-block-16 af-class-_1">Crypto Messiah Bobblehead</div>
                          <div className="af-class-html-embed-9 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonBobbleHead_400x400_black_BG_V3.gif" alt="goon" /></div>
                        </div>
                        <div className="af-class-card-item-content af-class-memecard">
                          <div className="af-class-fade-in-on-scroll">
                            <div className="af-class-div-block-53" />
                          </div>
                          <div className="af-class-div-block-45" />
                          <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                            <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                              <div className="af-class-text-block-23">0.5</div>
                            </div>
                            <GoonView.Controller />
                          </div>
                          <div className="af-class-div-block-42">
                            <div className="af-class-text-block-22">
                              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597163426490351626" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-mask">
                      <div className="af-class-div-block-54">
                        <div className="af-class-text-block-16 af-class-_1">$GOON MASK</div>
                      </div>
                      <div className="af-class-card-item-content af-class-memecard">
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-53" />
                        </div>
                        <div className="af-class-div-block-45 af-class-_1">
                          <div className="af-class-html-embed-8 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                          <div className="af-class-html-embed-8 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                          <div className="af-class-html-embed-8 af-class-_1 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                          <div className="af-class-html-embed-8 af-class-_2 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                        </div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.02</div>
                          </div>
                          <GoonView.Controllermask />
                        </div>
                        <div className="af-class-div-block-42">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597166725025235144" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-div-block-52">
                        <div className="af-class-text-block-21">Purchase of the NFT&nbsp;will unlock the $GOON Mask Preorder.</div>
                      </div>
                    </div>
                    <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_11 af-class-_2">
                      <div className="af-class-goonmeme"><img src="images/photo_2021-06-08_23-56-09.jpg" loading="lazy" sizes="(max-width: 479px) 82vw, (max-width: 991px) 41vw, (max-width: 1279px) 29vw, 381.4236145019531px" srcSet="images/photo_2021-06-08_23-56-09-p-500.jpeg 500w, images/photo_2021-06-08_23-56-09-p-800.jpeg 800w, images/photo_2021-06-08_23-56-09-p-1080.jpeg 1080w, images/photo_2021-06-08_23-56-09.jpg 1280w" alt className="af-class-image-30" />
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.1</div>
                          </div>
                          <GoonView.Controllerledgen />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597164526001979393" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme"><img src="images/goon.messiah.jpg" loading="lazy" sizes="(max-width: 479px) 82vw, (max-width: 991px) 41vw, (max-width: 1279px) 29vw, 381.4236145019531px" srcSet="images/goon.messiah-p-500.jpeg 500w, images/goon.messiah-p-800.jpeg 800w, images/goon.messiah-p-1080.jpeg 1080w, images/goon.messiah.jpg 1170w" alt className="af-class-image-19" />
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.1</div>
                          </div>
                          <GoonView.Controllerbow />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597165625513607169" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme"><img src="images/goon.way.jpg" loading="lazy" sizes="(max-width: 479px) 82vw, (max-width: 991px) 41vw, (max-width: 1279px) 29vw, 381.4236145019531px" srcSet="images/goon.way-p-500.jpeg 500w, images/goon.way-p-800.jpeg 800w, images/goon.way-p-1080.jpeg 1080w, images/goon.way.jpg 1280w" alt className="af-class-image-19" />
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonView.Controllerdip />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597168924048490506" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme"><img src="images/photo_2021-06-14_13-11-13.jpg" loading="lazy" sizes="(max-width: 479px) 82vw, (max-width: 991px) 41vw, (max-width: 1279px) 29vw, 381.4236145019531px" srcSet="images/photo_2021-06-14_13-11-13-p-500.jpeg 500w, images/photo_2021-06-14_13-11-13-p-800.jpeg 800w, images/photo_2021-06-14_13-11-13.jpg 1280w" alt className="af-class-image-19" />
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonView.Controllertrippy />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597167824536862730" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme"><img src="images/photo_2021-06-15_18-21-20-1.jpg" loading="lazy" sizes="(max-width: 479px) 82vw, (max-width: 991px) 41vw, (max-width: 1279px) 29vw, 381.4236145019531px" srcSet="images/photo_2021-06-15_18-21-20-1-p-500.jpeg 500w, images/photo_2021-06-15_18-21-20-1-p-800.jpeg 800w, images/photo_2021-06-15_18-21-20-1-p-1080.jpeg 1080w, images/photo_2021-06-15_18-21-20-1.jpg 1170w" alt className="af-class-image-19" />
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonView.Controllerposter />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597170023560118282" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme"><img src="images/photo_2021-06-15_18-21-20.jpg" loading="lazy" sizes="(max-width: 479px) 82vw, (max-width: 991px) 41vw, (max-width: 1279px) 29vw, 381.4236145019531px" srcSet="images/photo_2021-06-15_18-21-20-p-500.jpeg 500w, images/photo_2021-06-15_18-21-20-p-800.jpeg 800w, images/photo_2021-06-15_18-21-20-p-1080.jpeg 1080w, images/photo_2021-06-15_18-21-20.jpg 1170w" alt className="af-class-image-19" />
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonView.Controller50 />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597171123071746058" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="af-class-onlymemessection-2 af-class-_2">
                  <div className="af-class-div-block-53"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f35f5790de77_GrSxEb2Q.png" loading="lazy" alt className="af-class-image-25" /></div>
                  <div className="af-class-div-block-49">
                    <div className="af-class-div-block-50">
                      <a href="https://twitter.com/goontoken" target="_blank" className="w-inline-block"><img src="images/iconfinder_104501_twitter_bird_icon.svg" loading="lazy" width={50} alt className="af-class-feature-v3-image af-class-oip-oip" /></a>
                      <a href="https://t.me/goontokenn" target="_blank" className="af-class-link-block-6 w-inline-block"><img src="images/iconfinder_4375490_logo_telegram_icon.svg" loading="lazy" width={50} alt className="af-class-feature-v3-image af-class-iop-iop af-class-o" /></a>
                      <a href="#" target="_blank" className="w-inline-block"><img src="images/image-11.png" loading="lazy" width={50} alt /></a>
                    </div><img src="images/Crypto-Messiah-Title.png" loading="lazy" sizes="(max-width: 479px) 91vw, (max-width: 991px) 29vw, (max-width: 1439px) 28vw, 25vw" srcSet="images/Crypto-Messiah-Title-p-500.png 500w, images/Crypto-Messiah-Title-p-800.png 800w, images/Crypto-Messiah-Title-p-1080.png 1080w, images/Crypto-Messiah-Title-p-1600.png 1600w, images/Crypto-Messiah-Title.png 1920w" alt className="af-class-image-27" />
                    <div className="af-class-text-block-19"><span className="af-class-text-span-8"><strong>Bigger than an investment. <br /></strong></span><br /><span><strong className="af-class-bold-text-7">$GOON</strong></span><strong> </strong>token represents a symbolic message of how young peoples lives all over the globe have been changed forever because of <strong>Meme coins</strong>. In this day and age, you no longer need generational wealth to get ahead. <br /><br />That’s why we created <span className="af-class-bold-text-7"><strong>$GOON</strong></span>. <br /><br /><strong className="af-class-bold-text-7">$GOON</strong> token represents the path that meme coins have paved for anyone smart enough and courageous enough to adapt &amp; think outside the box. &nbsp;With a collaborative and growing community unlike any other, <span className="af-class-bold-text-7"><strong>$GOON</strong></span> provides anyone - regardless of income level, race or religion - with the opportunity to change their lives forever. <br /><br />A chance at true <strong>financial freedom</strong>. In a nutshell, creating <span className="af-class-bold-text-7"><strong>$GOON</strong></span> is our way of fighting back against those that wish to to keep us shackled in a debt driven and society. <br /><br /><strong>The largest transfer of wealth</strong> in human history is happening before our eyes, as thousands of <strong>regular people </strong>have <strong>became millionaires </strong>off meme coins and crypto - what most people might consider a “joke”. But the results are very real. The numbers do not lie. The potential gains truly are “life changing.” <br /><br /><strong>GoonRich</strong> aka ‘<span className="af-class-bold-text-7"><strong>Crypto Messiah</strong></span>’ - who famously went from <strong>Mailman </strong>to <strong>Millionaire </strong>in a matter of days - is possibly the greatest living example of this. And <span className="af-class-bold-text-7"><strong>$GOON</strong></span> is his official coin. The script has been flipped forever… We won’t stop until Every <span className="af-class-bold-text-7"><strong>$GOON</strong></span> <strong>Gets Rich</strong>.<br /><br />Join the $Goon Squad today.</div>
                    <div className="af-class-div-block-8">
                      <div className="af-class-html-embed-10 w-embed w-script">
                        {/*  You just need to get this field.  */}
                        <div className="af-class-clipboard">
                          <input onclick="copy()" className="af-class-copy-input" defaultValue="0xb0302D59237e6104c3f0D145996302F044797Ca5" id="copyClipboard" readOnly />
                          <button className="af-class-copy-btn" id="copyButton" onclick="copy()"><i className="af-class-far af-class-fa-copy" /></button>
                        </div>
                        <div id="copied-success" className="af-class-copied">
                          <span>Copied!</span>
                          <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-copy-input {\n  max-width: 275px;\n  width: 100%;\n  cursor: pointer;\n  background-color: #eaeaeb;\n  border:none;\n  color:#6c6c6c;\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 15px 45px 15px 15px;\n  font-family: 'Montserrat', sans-serif;\n  box-shadow: 0 3px 15px #b8c6db;\n  -moz-box-shadow: 0 3px 15px #b8c6db;\n  -webkit-box-shadow: 0 3px 15px #b8c6db;\n}\n.af-view .af-class-copy-input:focus {\n  outline:none;\n}\n.af-view .af-class-copy-btn {\n  width:40px;\n  background-color: #eaeaeb;\n  font-size: 18px;\n  padding: 6px 9px;\n  border-radius: 5px;\n  border:none;\n  color:#6c6c6c;\n  margin-left:-50px;\n  transition: all .4s;\n}\n.af-view .af-class-copy-btn:hover {\n  transform: scale(1.3);\n  color:#1a1a1a;\n  cursor:pointer;\n}\n.af-view .af-class-copy-btn:focus {\n  outline:none;\n}\n.af-view .af-class-copied {\n  font-family: 'Montserrat', sans-serif;\n  width: 75px;\n  display: none;\n  position:fixed;\n\tbottom: 20px;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n  color:#000;\n  padding: 15px 15px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 3px 15px #b8c6db;\n  -moz-box-shadow: 0 3px 15px #b8c6db;\n  -webkit-box-shadow: 0 3px 15px #b8c6db;\n}\n" }} />
                        </div>
                      </div>
                      <div className="af-class-div-block-51"><img src="images/New-Project-17.png" loading="lazy" alt className="af-class-image-29" /></div>
                    </div>
                  </div>
                </div>
              </div></section>
            <div className="af-class-footer-2">
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
              <div className="af-class-footer-copyright af-class-_2021">
                <div className="af-class-grey-text-2 af-class-white af-class-_20211">Suck Elon's Cock © <strong className="af-class-bold-text-5">2021</strong></div>
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