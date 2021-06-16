/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import GoonView from './GoonView'
import GoonmaskView from './GoonmaskView'
import EmailformView from './EmailformView'

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
    htmlEl.dataset['wfPage'] = '60c91b003efcd0a8cda0b7be'
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
          <div className="af-class-body">
            <section id="limited-edition-nfts-section" data-w-id="db93a6df-5d15-6d65-1e91-10cc289421c9" className="af-class-section af-class-dark">
              <div className="af-class-container">
                <section id="onlymemessectionnslug" data-w-id="db93a6df-5d15-6d65-1e91-10cc28942227" style={{opacity: 0}} className="af-class-onlymemessection">
                  <div className="af-class-dont-take-our-word-title">
                    <div className="af-class-fade-in-on-scroll">
                      <div className="af-class-div-block-21">
                        <div className="af-class-text-block-6"><strong className="af-class-bold-text-6">Meme Markplace</strong></div><img src="images/OnlyMemes-Logo-TM-V3.png" loading="lazy" sizes="(max-width: 479px) 86vw, (max-width: 991px) 73vw, (max-width: 1279px) 59vw, 770.5729370117188px" width="1460.5" srcSet="images/OnlyMemes-Logo-TM-V3-p-500.png 500w, images/OnlyMemes-Logo-TM-V3-p-1600.png 1600w, images/OnlyMemes-Logo-TM-V3-p-2000.png 2000w, images/OnlyMemes-Logo-TM-V3-p-2600.png 2600w, images/OnlyMemes-Logo-TM-V3-p-3200.png 3200w, images/OnlyMemes-Logo-TM-V3.png 3893w" alt className="af-class-image-21" />
                      </div>
                    </div>
                  </div>
                  <div data-w-id="db93a6df-5d15-6d65-1e91-10cc2894222f" style={{opacity: 0}} className="w-layout-grid af-class-grid-testimonial">
                    <div id="w-node-db93a6df-5d15-6d65-1e91-10cc28942230-cda0b7be" data-w-id="db93a6df-5d15-6d65-1e91-10cc28942230" className="af-class-card-item af-class-memes-coming-soon af-class-_11">
                      <div className="af-class-card-item-content af-class-memecard">
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-25">
                            <div data-w-id="db93a6df-5d15-6d65-1e91-10cc28942234" data-animation-type="lottie" data-src="documents/data.json" data-loop={0} data-direction={1} data-autoplay={0} data-is-ix2-target={1} data-renderer="svg" data-default-duration="4.833333333333333" data-duration={0} data-ix2-initial-state={0} className="af-class-lottie-animation" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="onlymemes.goon" data-w-id="db93a6df-5d15-6d65-1e91-10cc28942235" className="af-class-card-item af-class-memes-coming-soon af-class-_11 af-class-_1 w-node-db93a6df-5d15-6d65-1e91-10cc28942235-cda0b7be">
                      <div className="af-class-div-block-44 af-class-_1">
                        <div className="af-class-text-block-16">$GOON&nbsp;<br />OnlyMemes Bodega</div>
                      </div>
                      <div className="af-class-card-item-content af-class-memecard af-class-gooon">
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-25"><img src="images/GrSxEb2Q.png" loading="lazy" sizes="(max-width: 479px) 80vw, (max-width: 991px) 87vw, (max-width: 1279px) 71vw, 933.2291870117188px" srcSet="images/GrSxEb2Q-p-500.png 500w, images/GrSxEb2Q-p-800.png 800w, images/GrSxEb2Q-p-1080.png 1080w, images/GrSxEb2Q-p-1600.png 1600w, images/GrSxEb2Q.png 1920w" alt className="af-class-image-25" /></div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-db93a6df-5d15-6d65-1e91-10cc2894223f-cda0b7be" data-w-id="db93a6df-5d15-6d65-1e91-10cc2894223f" className="af-class-card-item af-class-memes-coming-soon af-class-_11 af-class-_1 af-class-_23">
                      <div className="af-class-div-block-44">
                        <div className="af-class-text-block-16 af-class-_1">Crypto Messiah Bobblehead</div>
                        <div className="af-class-html-embed-9 w-embed"><img src="https://sechosting.s3.us-east-2.amazonaws.com/media/GoonBobbleHead_600x600_black_BG.gif" alt="goon" /></div>
                      </div>
                      <div className="af-class-card-item-content af-class-memecard">
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-25" />
                        </div>
                        <div className="af-class-div-block-45" />
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
                    <div data-w-id="db93a6df-5d15-6d65-1e91-10cc28942254" className="af-class-card-item af-class-memes-coming-soon af-class-mask">
                      <div className="af-class-div-block-44">
                        <div className="af-class-text-block-16 af-class-_1">$GOON MASK</div>
                      </div>
                      <div className="af-class-card-item-content af-class-memecard">
                        <div className="af-class-fade-in-on-scroll">
                          <div className="af-class-div-block-25" />
                        </div>
                        <div className="af-class-div-block-45 af-class-_1">
                          <div className="af-class-html-embed-8 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                          <div className="af-class-html-embed-8 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                          <div className="af-class-html-embed-8 af-class-_1 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                          <div className="af-class-html-embed-8 af-class-_2 w-embed"><img src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="goon" /></div>
                        </div>
                        <div id="purchase-pass-button" className="af-class-nft-buy-buttons af-class-sec-coin af-class-purchase af-class-_1">
                          <div id="purchase-pass-button-1" className="af-class-nft-price-div"><img src="images/ETH-logo.svg" loading="lazy" width={25} alt="ETH logo" className="af-class-image-15" />
                            <div className="af-class-text-block-11">0.02</div>
                          </div>
                          <GoonmaskView.Controller />
                        </div>
                        <div className="af-class-div-block-42">
                          <div className="af-class-text-block-15">
                            <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/46344851359934370536456800909699950300763532368427110215084597166725025235144" target="_blank" className="af-class-opensealink">View on OpenSea</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section id="subscribe-form" className="af-class-subscribe-form-2">
                    <div className="af-class-centered-container w-container">
                      <h2 className="af-class-text-gradient-3 af-class-subform">INSIDER&nbsp;INFO</h2>
                      <p className="af-class-paragraph-7">Be the first to know when <strong>OnlyMemes™ </strong>beta release is live.</p>
                      <EmailformView.Controller />
                    </div>
                  </section>
                </section>
              </div>
            </section>
            {/* [if lte IE 9]><![endif] */}
            <style dangerouslySetInnerHTML={{__html: "\n.af-view, .af-view {\n    max-width: 100%;\n    overflow-x: hidden;\n}\n" }} />
          </div>
        </span>
      </span>
    )
  }
}

export default OnlymemesView

/* eslint-enable */