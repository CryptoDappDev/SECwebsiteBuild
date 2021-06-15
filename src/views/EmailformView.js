/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class EmailformView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/EmailformController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = EmailformView

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
    const proxies = EmailformView.Controller !== EmailformView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\components.css);
          @import url(C:\\css\\suck-elons-cock.css);
        ` }} />
        <span className="af-view">
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
        </span>
      </span>
    )
  }
}

export default EmailformView

/* eslint-enable */