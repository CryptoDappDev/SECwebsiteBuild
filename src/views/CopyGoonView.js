/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://kit.fontawesome.com/d97b87339f.js").then(body => body.text()), isAsync: false },
  { loading: Promise.resolve("function copy(){var e=document.getElementById(\"copyClipboard\");e.select(),e.setSelectionRange(0,99999),document.execCommand(\"copy\"),$(\"#copied-success\").fadeIn(800),$(\"#copied-success\").fadeOut(800)}"), isAsync: false },
]

let Controller

class CopyGoonView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CopyGoonController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CopyGoonView

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
    const proxies = CopyGoonView.Controller !== CopyGoonView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-div-block-8">
            <div className="af-class-html-embed-10 w-embed w-script">
              {/*  You just need to get this field.  */}
              <div className="af-class-clipboard">
                <input onclick="copy()" className="af-class-copy-input" defaultValue="0xb0302D59237e6104c3f0D145996302F044797Ca5" id="copyClipboard" readOnly />
                <button className="af-class-copy-btn" id="copyButton" onclick="copy()"><i className="af-class-far af-class-fa-copy" /></button>
              </div>
              <div id="copied-success" className="af-class-copied">
                <span>Copied!</span>
                <style dangerouslySetInnerHTML={{__html: "\n  .af-view .af-class-af-view .af-class-af-class-copy-input {\n  max-width: 275px;\n  width: 100%;\n  cursor: pointer;\n  background-color: #eaeaeb;\n  border:none;\n  color:#6c6c6c;\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 15px 45px 15px 15px;\n  font-family: 'Montserrat', sans-serif;\n  box-shadow: 0 3px 15px #b8c6db;\n  -moz-box-shadow: 0 3px 15px #b8c6db;\n  -webkit-box-shadow: 0 3px 15px #b8c6db;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-input:focus {\n  outline:none;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-btn {\n  width:40px;\n  background-color: #eaeaeb;\n  font-size: 18px;\n  padding: 6px 9px;\n  border-radius: 5px;\n  border:none;\n  color:#6c6c6c;\n  margin-left:-50px;\n  transition: all .4s;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-btn:hover {\n  transform: scale(1.3);\n  color:#1a1a1a;\n  cursor:pointer;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-btn:focus {\n  outline:none;\n}\n.af-view .af-class-af-view .af-class-af-class-copied {\n  font-family: 'Montserrat', sans-serif;\n  width: 75px;\n  display: none;\n  position:fixed;\n\tbottom: 20px;\n\tleft: 0;\n\tright: 0;\n\tmargin: auto;\n  color:#000;\n  padding: 15px 15px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 3px 15px #b8c6db;\n  -moz-box-shadow: 0 3px 15px #b8c6db;\n  -webkit-box-shadow: 0 3px 15px #b8c6db;\n}\n" }} />
              </div>
            </div>
            <div className="af-class-card-item-2 af-class-memes-coming-soon af-class-_11 af-class-_3">
              <div className="w-embed"><img src="images/photo_2021-06-09_00-06-33.jpg" alt="GOON" /></div>
            </div>
            <div className="af-class-text-block-19">‍<strong>The largest transfer of wealth</strong> in human history is happening before our eyes, as thousands of <strong>regular people </strong>have <strong>became millionaires </strong>off meme coins and crypto - what most people might consider a “joke”. But the results are very real. The numbers do not lie. The potential gains truly are “life changing.” <br /><br /><br />‍<strong>GoonRich</strong> aka ‘<span className="af-class-bold-text-7"><strong>Crypto Messiah</strong></span>’ - who famously went from <strong>Mailman </strong>to <strong>Millionaire </strong>in a matter of days - is possibly the greatest living example of this. And <span className="af-class-bold-text-7"><strong>$GOON</strong></span> is his official coin. The script has been flipped forever… We won’t stop until Every <span className="af-class-bold-text-7"><strong>$GOON</strong></span> <strong>Gets Rich</strong>.<br /><br /><br />Join the $Goon Squad today.</div>
            <div className="af-class-div-block-63">
              <div className="w-embed"><img className="af-class-goonmemes" src="https://secmedia.s3.us-east-2.amazonaws.com/GoonSkiMask.gif" alt="GOON" /></div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default CopyGoonView

/* eslint-enable */