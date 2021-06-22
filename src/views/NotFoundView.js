/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60a76909ccf920aea94e85c4").then(body => body.text()), isAsync: false },
  { loading: fetch("js/suck-elons-cock.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '60cea2e97b2d6204c8cf92b3'
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
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

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
            <div className="af-class-wrapper">
              <div className="af-class-section">
                <div className="af-class-container">
                  <div className="af-class-utility-page-wrap">
                    <div className="af-class-utility-page-content w-form">
                      <h1 className="af-class-hero-text">404</h1>
                      <p>The page you are looking for doesn't exist or has been moved.</p>
                      <a href="old-home.html" className="af-class-button w-button">← Back Home</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-footer">
                <div className="af-class-container w-container">
                  <div className="af-class-footer-social-media-container">
                    <div className="af-class-social-media-content">
                      <div className="af-class-fade-in-on-scroll">
                        <div>Follow us</div>
                      </div>
                      <a href="https://instagram.com" target="_blank" className="af-class-social-media-link w-inline-block"><img src="images/instagram.svg" loading="lazy" alt className="af-class-social-media-icon" /></a>
                      <a data-w-id="d1050a46-2e53-c338-36df-3f8b09941a59" href="https://twitter.com" target="_blank" className="af-class-social-media-link w-inline-block"><img src="images/twitter.svg" loading="lazy" alt className="af-class-social-media-icon" /></a>
                      <a data-w-id="8a5ed07a-f397-fc9a-ff8e-a8d3f66b1fbf" href="https://linkedin.com" target="_blank" className="af-class-social-media-link w-inline-block"><img src="images/linkedin.svg" loading="lazy" alt className="af-class-social-media-icon" /></a>
                      <a data-w-id="5cb0c9cf-adaf-c2b6-d09b-9a3df417091e" href="https://facebook.com" target="_blank" className="af-class-social-media-link w-inline-block"><img src="images/facebook.svg" loading="lazy" alt className="af-class-social-media-icon" /></a>
                    </div>
                    <div className="af-class-made-container">
                      <div className="af-class-x">
                        <div className="af-class-light-grey">Made<span className="af-class-text-gradient-1" /> by <a href="https://webflow.com/templates/designers/azwedo" target="_blank" className="af-class-external-link">Azwedo.com</a>
                        </div>
                      </div>
                      <div className="af-class-xx">
                        <div className="af-class-light-grey">Powered by <a href="https://webflow.com" target="_blank" className="af-class-external-link">Webflow</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-footer-flex-container">
                    <div className="af-class-footer-brand-content">
                      <a href="old-home.html" className="af-class-footer-logo-link w-inline-block"><img src="images/1080x1080.png" sizes="100vw" srcSet="images/1080x1080-p-500.png 500w, images/1080x1080-p-800.png 800w, images/1080x1080-p-1080.png 1080w, images/1080x1080.png 1195w" alt className="af-class-footer-image" /></a>
                      <ul role="list" className="af-class-footer-list w-list-unstyled">
                        <li className="af-class-footer-list-item">
                          <a href="template/change-log.html" className="af-class-link w-inline-block">
                            <div>Change Log</div>
                            <div className="af-class-link-underline" />
                          </a>
                        </li>
                        <li className="af-class-footer-list-item">
                          <a href="template/style.html" className="af-class-link w-inline-block">
                            <div>Style</div>
                            <div className="af-class-link-underline" />
                          </a>
                        </li>
                        <li className="af-class-footer-list-item">
                          <a href="template/licensing.html" className="af-class-link w-inline-block">
                            <div>Licensing</div>
                            <div className="af-class-link-underline" />
                          </a>
                        </li>
                        <li className="af-class-footer-list-item">
                          <a href="privacy.html" className="af-class-link w-inline-block">
                            <div>Privacy</div>
                            <div className="af-class-link-underline" />
                          </a>
                        </li>
                        <li className="af-class-footer-list-item">
                          <a href="mailto:info@website.com?subject=Webflow%20Template%20Contact" className="af-class-link w-inline-block">
                            <div>info@website.com</div>
                            <div className="af-class-link-underline" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="af-class-footer-copyright">
                      <div className="af-class-grey-text">Copyright © <strong>Bold</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default NotFoundView

/* eslint-enable */