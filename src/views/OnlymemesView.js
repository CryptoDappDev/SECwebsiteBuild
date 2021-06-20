/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import GoonNavView from './GoonNavView'
import GoonNFTCardView from './GoonNFTCardView'
import GoonNFTBobbleView from './GoonNFTBobbleView'
import GoonNFTMaskView from './GoonNFTMaskView'
import GoonNFT50View from './GoonNFT50View'
import GoonNFTRockyView from './GoonNFTRockyView'
import GoonNFT2pacView from './GoonNFT2pacView'
import GoonNFTWuTangView from './GoonNFTWuTangView'
import GoonNFTKennyView from './GoonNFTKennyView'
import GoonNFTSnoopView from './GoonNFTSnoopView'
import GoonTickerView from './GoonTickerView'
import GoonTwitterShareView from './GoonTwitterShareView'
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
    htmlEl.dataset['wfPage'] = '60cea2e97b2d622a1ecf92c1'
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
            <div className="af-class-div-block-79" />
            <GoonNavView.Controller />
            <section id="limited-edition-nfts-section" className="af-class-section af-class-dark af-class-_1">
              <div id="goononlymemes" className="af-class-onlymemebanners">
                <a href="https://youtu.be/D7kt4i6wPKY" target="_blank" className="af-class-link-block-6 w-inline-block">
                  <div className="af-class-div-block-55"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f34f3e90de73_OnlyMemes%20Logo%20TM%20V3.png" loading="lazy" width="1460.5" alt className="af-class-image-37" /></div>
                </a>
              </div>
              <div id="onlymemes.goon" className="af-class-card-item-2 af-class-_1 af-class-_2 af-class-bodegga">
                <a href="#goonbodega" className="w-inline-block">
                  <div className="af-class-div-block-54 af-class-_1">
                    <div className="af-class-html-embed-14 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonBodega_2.png" alt="GOON" /></div>
                  </div>
                </a>
              </div>
              <div className="af-class-container-2 af-class-_1">
                <section id="goonbodega" className="af-class-onlymemessection-2 af-class-_3">
                  <div className="w-layout-grid af-class-grid-testimonial-2">
                    <div className="af-class-card-item-2 af-class-goon-video">
                      <div className="w-embed"><video controls loop width="100%" height="100%" autoPlay muted>
                          <source src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonRich_NFT_Promo_V2.mp4" type="video/mp4" />
                        </video></div>
                    </div>
                    <div className="af-class-div-block-48">
                      <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_1 af-class-_2">
                        <div className="af-class-div-block-61">
                          <div className="af-class-html-embed-17 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/1GoonRich_OnlyMemes_TradingCard.gif" alt="GOON Trading Card" /></div>
                        </div>
                        <div className="af-class-card-item-content af-class-memecard af-class-_2">
                          <div className="af-class-div-block-45" />
                          <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                            <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                              <div className="af-class-text-block-23">1</div>
                            </div>
                            <GoonNFTCardView.Controller />
                          </div>
                          <div className="af-class-div-block-42">
                            <div className="af-class-text-block-22">
                              <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597172222583373829" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_1 af-class-bobble">
                        <div className="af-class-div-block-54">
                          <div className="af-class-html-embed-18 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonBobbleHead_400x400_black_BG_V3.gif" alt="Goon bobble Head" /></div>
                        </div>
                        <div className="af-class-div-block-61 af-class-_1">
                          <div className="af-class-text-block-16 af-class-_1">CRYPTO MESSIAH BOBBLE HEAD</div>
                        </div>
                        <div className="af-class-card-item-content af-class-bobble">
                          <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                            <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                              <div className="af-class-text-block-23">0.5</div>
                            </div>
                            <GoonNFTBobbleView.Controller />
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
                          <GoonNFTMaskView.Controller />
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
                          <GoonNFT50View.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597178819653140490" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.asap.png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.1</div>
                          </div>
                          <GoonNFTRockyView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597177720141512714" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.2pac+(2).png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonNFT2pacView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597174421606629386" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.wutang.png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonNFTWuTangView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597176620629884938" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-goonmeme">
                        <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goonmeme.kenny.png" alt="GOON MEME" /></div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1 af-class-meme">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="https://uploads-ssl.webflow.com/60c96fd79ca1f3785190ddb2/60c96fd79ca1f341a190de04_ETH%20logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-23">0.01</div>
                          </div>
                          <GoonNFTKennyView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597173322095001610" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
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
                          <GoonNFTSnoopView.Controller />
                        </div>
                        <div className="af-class-view-on">
                          <div className="af-class-text-block-22">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597175521118257162" target="_blank" className="af-class-opensealink-2">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="af-class-onlymemessection-2 af-class-_2">
                  <div className="af-class-profile-bar">
                    <div className="af-class-goon-token-gif">
                      <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/goon/GoonCoinV5.gif" alt="GOON" />
                        <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-goonmemes {\nborder-radius: 20px 20px 0px 0px;\n}\n" }} />
                      </div>
                    </div>
                    <GoonTickerView.Controller />
                    <div className="af-class-goon-token-icons">
                      <a href="https://twitter.com/goontoken" target="_blank" className="af-class-twitter w-inline-block">
                        <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/goon.twitter.png" alt="GOON" /></div>
                      </a>
                      <a href="https://www.dextools.io/app/uniswap/pair-explorer/0xdfea1870f3b3841de553cf271e5653a48d5f31af" target="_blank" className="af-class-dextoollink w-inline-block">
                        <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/dextool.logo.png" alt="DEXtools" /></div>
                      </a>
                      <a href="https://app.uniswap.org/#/swap?outputCurrency=0xb0302d59237e6104c3f0d145996302f044797ca5" target="_blank" className="af-class-goon-uniswap w-inline-block">
                        <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/uniswap.logo.png" alt="Uniswap" /></div>
                      </a>
                      <a href="https://t.me/goontokenn" target="_blank" className="af-class-goon-telegram w-inline-block">
                        <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/goon.telegram.png" alt="GOON" /></div>
                      </a>
                    </div>
                    <div className="af-class-div-block-70">
                      <a href="https://coinsniper.net/coin/3559" target="_blank" className="w-inline-block">
                        <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/longcoinsniper.logo.png" alt="COINSNIPER" /></div>
                      </a>
                      <GoonTwitterShareView.Controller />
                    </div>
                    <div className="af-class-bio-text"><span className="af-class-text-span-8"><strong className="af-class-bold-text-9">Bigger than an investment. <br /></strong></span><br /><span><strong className="af-class-bold-text-7">$GOON</strong></span><strong> </strong>token represents a symbolic message of how young peoples lives all over the globe have been changed forever because of <strong>Meme coins</strong>. In this day and age, you no longer need generational wealth to get ahead.<br /><br />That’s why we created <span className="af-class-bold-text-7"><strong>$GOON</strong></span>.<br /><br /></div>
                    <div className="af-class-div-block-62">
                      <div className="af-class-html-embed-19 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/%24GOON+TITLE.png" alt="GOON Wordstamp" /></div>
                    </div>
                    <div className="af-class-bio-text"><strong className="af-class-bold-text-7">$GOON</strong> token represents the path that meme coins have paved for anyone smart enough and courageous enough to adapt &amp; think outside the box. &nbsp;<strong><br /><br />With a collaborative and growing community</strong> unlike any other, <span className="af-class-bold-text-7"><strong>$GOON</strong></span> provides anyone - regardless of income level, race or religion - with the opportunity to change their lives forever. </div>
                    <div className="af-class-div-block-63" />
                    <CopyGoonView.Controller />
                    <div>
                      <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/tokenomics+titlev2.png" alt="Tokenomics" /></div>
                      <div className="af-class-bio-text">‍<strong className="af-class-bold-text-10">2% tax</strong> on all transactions <strong className="af-class-bold-text-12">redistributed </strong>to all holders.<br /><br /><strong className="af-class-bold-text-11">60%</strong> of supplied <strong className="af-class-bold-text-13">burned</strong>.<br /><br /><span className="af-class-text-span-10">Deflationary.<br /></span><br />‍</div>
                    </div>
                    <div className="af-class-div-block-78">
                      <div className="af-class-html-embed-26 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/CMC.logo.png" alt="CMC" /></div>
                      <div className="af-class-bio-text af-class-pending"><span><em>Listing pending.</em></span></div>
                    </div>
                    <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-mask af-class-_1">
                      <div className="w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/goon/goon_bobbling+(1).gif" alt="goon" /></div>
                    </div>
                    <div className="af-class-bio-text af-class-_2 af-class-second-block-goon-text">Join the <strong className="af-class-bold-text-8">$GOON GANG </strong>today.</div>
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
                  <a href="https://opensea.io/accounts/SuckElonsCock" className="af-class-social-media-link w-inline-block">
                    <div className="af-class-html-embed-21 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/opensea+(2).png" alt="GOON" /></div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCkzofLl4xepSF2CkMU1s53w" target="_blank" className="af-class-social-media-link w-inline-block">
                    <div className="af-class-html-embed-22 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/youtube.logo.x.png" alt="YT" /></div>
                  </a>
                  <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b454aae8762_facebook.svg" loading="lazy" alt="Small circle Facebook icon" className="af-class-social-media-icon" /></a>
                  <a href="https://www.facebook.com/suckelonscock" target="_blank" className="af-class-social-media-link w-inline-block"><img src="https://uploads-ssl.webflow.com/60bbfcaf8d961b9b48ae873d/60bbfcaf8d961b6340ae87a2_iconfinder_discord_18_5474122-svg%20(1).png" loading="lazy" width={28} alt="Small circle Facebook icon" className="af-class-social-media-icon" /></a>
                </div>
              </div>
              <div className="af-class-footer-copyright af-class-_2021 af-class-_2">
                <div className="af-class-grey-text-2 af-class-white af-class-_20211">Suck Elon's Cock © <strong className="af-class-bold-text-5">2021</strong></div>
              </div>
            </div>
            <div data-w-id="d23f896b-9a4e-faab-3c80-b64f95b279af" style={{opacity: 1}} className="af-class-goon-back-to-top">
              <a href="#onlymemestop" className="af-class-link-block-7 w-inline-block">
                <div className="af-class-html-embed-27 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/logos/up.arrow.png" alt="UP" /></div>
              </a>
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