/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://kit.fontawesome.com/d97b87339f.js").then(body => body.text()), isAsync: false },
  { loading: Promise.resolve("function copy(){var e=document.getElementById(\"copyClipboard\");e.select(),e.setSelectionRange(0,99999),document.execCommand(\"copy\"),$(\"#copied-success\").fadeIn(800),$(\"#copied-success\").fadeOut(800)}"), isAsync: false },
]

let Controller

class CopyButton2View extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/CopyButton2Controller')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = CopyButton2View

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
    const proxies = CopyButton2View.Controller !== CopyButton2View ? transformProxies(this.props.children) : {

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
          <div id="contract-2" className="af-class-copy-contract-buy-section">
            <div className="af-class-html-embed-5 af-class-buy-section w-embed w-script">
              <div className="af-class-clipboard">
                <input onclick="copy()" className="af-class-copy-input" defaultValue="0x9c061df134d11412151e9c200ce3f9f6f295094a" id="copyClipboard" readOnly />
                <button className="af-class-copy-btn" id="copyButton" onclick="copy()"><i className="af-class-far af-class-fa-copy" /></button>
              </div>
              <div id="copied-success" className="af-class-copied">
                <span>Copied!</span>
              </div>
              <style dangerouslySetInnerHTML={{__html: "\n.af-view .af-class-af-view .af-class-af-class-copy-input {\n  max-width: 375px;\n  min-width: 355px;\n  width: 100%;\n  cursor: pointer;\n  background-color: #eaeaeb;\n  border:none;\n  color:#6c6c6c;\n  font-size: 14px;\n  border-radius: 5px;\n  padding: 15px 45px 15px 15px;\n  font-family: 'Montserrat', sans-serif;\n  box-shadow: 0 3px 15px #b8c6db;\n  -moz-box-shadow: 0 3px 15px #b8c6db;\n  -webkit-box-shadow: 0 3px 15px #b8c6db;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-input:focus {\n  outline:none;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-btn {\n  width:40px;\n  background-color: #eaeaeb;\n  font-size: 18px;\n  padding: 6px 9px;\n  border-radius: 5px;\n  border:none;\n  color:#6c6c6c;\n  margin-left:-50px;\n  transition: all .4s;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-btn:hover {\n  transform: scale(1.3);\n  color:#1a1a1a;\n  cursor:pointer;\n}\n.af-view .af-class-af-view .af-class-af-class-copy-btn:focus {\n  outline:none;\n}\n.af-view .af-class-af-view .af-class-af-class-copied {\n  font-family: 'Montserrat', sans-serif;\n  width: 75px;\n  display: none;\n  position:fixed;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    margin: auto;\n  color:#000;\n  padding: 15px 15px;\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 3px 15px #b8c6db;\n  -moz-box-shadow: 0 3px 15px #b8c6db;\n  -webkit-box-shadow: 0 3px 15px #b8c6db;\n}\n" }} />
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default CopyButton2View

/* eslint-enable */