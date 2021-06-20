/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://platform.twitter.com/widgets.js").then(body => body.text()), isAsync: true },
]

let Controller

class GoonTwitterShareView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/GoonTwitterShareController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = GoonTwitterShareView

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
    const proxies = GoonTwitterShareView.Controller !== GoonTwitterShareView ? transformProxies(this.props.children) : {

    }

    return (
      <span>

      </span>
    )
  }
}

export default GoonTwitterShareView

/* eslint-enable */