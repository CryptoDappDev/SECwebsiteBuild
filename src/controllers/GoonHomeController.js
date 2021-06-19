import React from 'react'

import GoonHomeView  from '../views/GoonHomeView';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function GoonHomeController() {
    
    return (
        <Link to="/#top">
            <GoonHomeView/>
        </Link>     
    )
}

export default (props) => (
    <div class='pb-1' >
        <GoonHomeController/>
    </div>
    
)

