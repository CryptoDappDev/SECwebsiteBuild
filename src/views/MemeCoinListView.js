/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class MemeCoinListView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/MemeCoinListController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = MemeCoinListView

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
    const proxies = MemeCoinListView.Controller !== MemeCoinListView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
          <div data-collapse="all" data-animation="default" data-duration={400} role="banner" className="af-class-coinincubator w-nav">
            <div className="af-class-container-5 w-container">
              <div className="af-class-text-block-31">Coin Incubator<span className="af-class-text-span-14">™</span></div>
              <nav role="navigation" className="af-class-nav-menu-2 w-nav-menu">
                <a href="#" className="af-class-seclink w-nav-link">$SEC</a>
                <a href="#" className="af-class-goonlink w-nav-link">$GOON</a>
              </nav>
              <div className="af-class-menu-button-5 w-nav-button">
                <div className="af-class-icon w-icon-dropdown-toggle" />
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default MemeCoinListView

/* eslint-enable */