import React from 'react'
import IndexView from '../views/IndexView'
import { MetamaskStateProvider } from 'use-metamask';
import MemeCoinListView from '../views/MemeCoinListView';

function MemeCoinListController() {

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
            <a href="SEC" className="af-class-seclink w-nav-link">$SEC</a>
            <a href="GoonRich" className="af-class-goonlink w-nav-link">$GOON</a>
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

export default (props) => (
  <MemeCoinListController> 
  
  </MemeCoinListController>
)