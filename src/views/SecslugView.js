/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class SecslugView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/SecslugController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SecslugView

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
    const proxies = SecslugView.Controller !== SecslugView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <a href="index.html" target="_blank" className="af-class-brand-3 af-class-_1 w-nav-brand"><img src="images/Sec_Wordstamp_V3.png" loading="lazy" width={150} sizes="120.00000762939453px" srcSet="images/Sec_Wordstamp_V3-p-500.png 500w, images/Sec_Wordstamp_V3-p-800.png 800w, images/Sec_Wordstamp_V3.png 1000w" alt="$SEC Logo - suck elon's cock wordstamp" className="af-class-image-16" /></a>
        </span>
      </span>
    )
  }
}

export default SecslugView

/* eslint-enable */