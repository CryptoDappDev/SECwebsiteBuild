import React from 'react'

import GoonHomeView  from '../views/GoonHomeView';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function GoonHomeController() {
    
    return (
            <GoonHomeView/>
 
    )
}

export default (props) => (
    <div class='pb-2' >
        <GoonHomeController/>
    </div>
    
)

