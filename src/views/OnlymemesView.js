/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import GoonHomeView from './GoonHomeView'
import GoonWalletMobView from './GoonWalletMobView'
import GoonWalletView from './GoonWalletView'
import GoonBobbleView from './GoonBobbleView'
import GoonMaskView from './GoonMaskView'
import GoonLegendView from './GoonLegendView'
import GoonBowView from './GoonBowView'
import GoonDipView from './GoonDipView'
import GoonTrippyView from './GoonTrippyView'
import GoonPosterView from './GoonPosterView'
import Goon50View from './Goon50View'
import GoonTickerView from './GoonTickerView'
import CopyGoonView from './CopyGoonView'

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
          <div className="af-class-body-2">
            <div data-collapse="medium" data-animation="default" data-duration={400} data-w-id="c751e115-cebe-a109-aa2a-584951a5a2e3" style={{opacity: 1}} role="banner" className="af-class-fixed-nav-3 af-class-_1 w-nav">
              <div className="af-class-gradient-border af-class-onlymemes" />
              <div className="af-class-container af-class-nav-container w-container">
                <GoonHomeView.Controller />
                <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                  <div className="af-class-nav-cta-button-2 af-class-mobile">
                    <GoonWalletMobView.Controller />
                    <a href="#" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header af-class-onlymemesdrops w-button"><strong>LIMITED DROPS</strong></a>
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
                  <GoonWalletView.Controller />
                  <a href="#limited-edition-nfts-section" id="limited-drop-button" className="af-class-button-3 af-class-exclusive af-class-header af-class-_1 w-button"><strong>LIMITED DROPS</strong></a>
                </div>
                <div className="af-class-menu-button-3 w-nav-button"><img src="images/menu-icon-white.svg" loading="lazy" alt className="af-class-image-17" /></div>
              </div>
            </div>
            <section id="limited-edition-nfts-section" className="af-class-section af-class-dark af-class-_1">
              <div className="af-class-onlymemebanners">
                <div className="af-class-div-block-55"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f34f3e90de73_OnlyMemes%20Logo%20TM%20V3.png" loading="lazy" width="1460.5" alt className="af-class-image-37" /></div>
              </div>
              <div id="onlymemes.goon" className="af-class-card-item-2 af-class-_1 af-class-_2 af-class-bodegga">
                <div className="af-class-div-block-54 af-class-_1">
                  <div className="af-class-html-embed-14 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonBodega.png" alt="GOON" /></div>
                </div>
              </div>
              <div className="af-class-container-2 af-class-_1">
                <section id="onlymemessectionnslug" className="af-class-onlymemessection-2 af-class-_3">
                  <div className="w-layout-grid af-class-grid-testimonial-2">
                    <div className="af-class-card-item-2 af-class-goon-video">
                      <div style={{paddingTop: '56.17021276595745%'}} className="w-video w-embed"><iframe className="af-class-embedly-embed" src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FACQY6LYVasc%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DACQY6LYVasc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FACQY6LYVasc%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube" scrolling="no" title="YouTube embed" frameBorder={0} allow="autoplay; fullscreen" allowFullScreen="true" /></div>
                    </div>
                    <div className="af-class-div-block-48">
                      <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_1 af-class-_2">
                        <div className="af-class-div-block-67">
                          <div className="af-class-text-block-24">NEW DROP<br /><span className="af-class-text-span-9">COMING SOON</span></div>
                        </div>
                        <div className="af-class-div-block-60">
                          <div className="af-class-div-block-61">
                            <div className="af-class-html-embed-17 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/1GoonRich_OnlyMemes_TradingCard.gif" alt="GOON Trading Card" /></div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_1 af-class-bobble">
                        <div className="af-class-div-block-54">
                          <div className="af-class-html-embed-18 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonBobbleHead_400x400_black_BG_V3.gif" alt="Goon bobble Head" /></div>
                        </div>
                        <div className="af-class-div-block-60">
                          <div className="af-class-div-block-61 af-class-_1">
                            <div className="af-class-text-block-16 af-class-_1">CRYPTO MESSIAH BOBBLE HEAD</div>
                          </div>
                        </div>
                        <div className="af-class-card-item-content af-class-memecard af-class-_2">
                          <div className="af-class-fade-in-on-scroll">
                            <div className="af-class-div-block-53" />
                          </div>
                          <div className="af-class-div-block-45" />
                          <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                            <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                              <div className="af-class-text-block-23">0.5</div>
                            </div>
                            <GoonBobbleView.Controller />
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
                      <div className="af-class-div-block-54 af-class-_2">
                        <div className="af-class-text-block-16 af-class-_1">$GOON MASK</div>
                      </div>
                      <div className="af-class-card-item-content af-class-memecard">
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-53" />
                        </div>
                        <div className="af-class-div-block-45 af-class-_1">
                          <div className="af-class-html-embed-8 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonSkiMask.gif" alt="GOON SKIMASK" /></div>
                          <div className="af-class-html-embed-8 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonSkiMask.gif" alt="GOON SKIMASK" /></div>
                          <div className="af-class-html-embed-8 af-class-_1 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonSkiMask.gif" alt="GOON SKIMASK" /></div>
                          <div className="af-class-html-embed-8 af-class-_2 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonSkiMask.gif" alt="GOON SKIMASK" /></div>
                        </div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.02</div>
                          </div>
                          <GoonMaskView.Controller />
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
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.50cent.png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.1</div>
                          </div>
                          <GoonLegendView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597164526001979393" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.asap.png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.1</div>
                          </div>
                          <GoonBowView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597165625513607169" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.2pac+(2).png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonDipView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597168924048490506" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.wutang.png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonTrippyView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597167824536862730" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.kenny.png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonPosterView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597170023560118282" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="af-class-div-block-58">
                          <div className="af-class-html-embed-11 af-class-goonmemeblock w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.snoop.png" alt="GOON MEME" /></div>
                        </div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <Goon50View.Controller />
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
                  <div className="af-class-div-block-49">
                    <div className="af-class-goon-token-gif">
                      <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonCoinV5.gif" alt="GOON" /></div>
                    </div>
                    <GoonTickerView.Controller />
                    <div className="af-class-goon-token-icons">
                      <a href="https://twitter.com/goontoken" target="_blank" className="af-class-twitter w-inline-block">
                        <div className="w-embed"><img src="images/iconfinder_104501_twitter_bird_icon.svg" alt="GOON" /></div>
                      </a>
                      <a href="https://www.dextools.io/app/uniswap/pair-explorer/0xdfea1870f3b3841de553cf271e5653a48d5f31af" target="_blank" className="af-class-dextoollink w-inline-block">
                        <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/dextool.logo.png" alt="DEXtools" /></div>
                      </a>
                      <a href="https://app.uniswap.org/#/swap?outputCurrency=0xb0302d59237e6104c3f0d145996302f044797ca5" target="_blank" className="af-class-goon-uniswap w-inline-block">
                        <div className="w-embed"><img src="images/image-18.png" alt="COINGECKO" /></div>
                      </a>
                      <a href="https://t.me/goontokenn" target="_blank" className="af-class-goon-telegram w-inline-block">
                        <div className="w-embed"><img src="images/iconfinder_4375490_logo_telegram_icon.svg" alt="GOON" /></div>
                      </a>
                    </div>
                    <div className="af-class-text-block-19"><span className="af-class-text-span-8"><strong>Bigger than an investment. <br />‍<br /></strong></span><br /><span><strong className="af-class-bold-text-7">$GOON</strong></span><strong> </strong>token represents a symbolic message of how young peoples lives all over the globe have been changed forever because of <strong>Meme coins</strong>. In this day and age, you no longer need generational wealth to get ahead.<br /> <br /><br />That’s why we created <span className="af-class-bold-text-7"><strong>$GOON</strong></span>.<br /><br /></div>
                    <div className="af-class-div-block-62">
                      <div className="af-class-html-embed-19 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/%24GOON+TITLE.png" alt="GOON Wordstamp" /></div>
                    </div>
                    <div className="af-class-text-block-19"><strong className="af-class-bold-text-7">$GOON</strong> token represents the path that meme coins have paved for anyone smart enough and courageous enough to adapt &amp; think outside the box. &nbsp;With a collaborative and growing community unlike any other, <span className="af-class-bold-text-7"><strong>$GOON</strong></span> provides anyone - regardless of income level, race or religion - with the opportunity to change their lives forever. </div>
                    <div className="af-class-div-block-63" />
                    <CopyGoonView.Controller />
                    <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-mask af-class-_1">
                      <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goon_bobbling+(1).gif" alt="goon" /></div>
                    </div>
                    <div className="af-class-text-block-19 af-class-_2 af-class-second-block-goon-text">Join the <strong className="af-class-bold-text-8">$GOON GANG </strong>today.</div>
                  </div>
                </div>
              </div>
            </section>
            <div className="af-class-gradient-border af-class-onlymemes af-class-footer" />
            <div className="af-class-footer-2 af-class-_1">
              <div className="af-class-div-block-29 af-class-_2">
                <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/onlymemes/OnlyMemes+Icon.png" alt="onlymemes logo" /></div>
              </div>
              <div>
                <div className="af-class-grey-text-2 af-class-white af-class-palace-club af-class-text-gradient-2 af-class-palace">#OnlyMemes</div>
              </div>
              <div className="af-class-social-media-content af-class-desktop af-class-_2">
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
              <div className="af-class-footer-copyright af-class-_2021 af-class-_2">
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