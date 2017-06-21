import React, { Component } from 'react';
import {Router,route,indexRoute,browserHistory,Link} from "react-router"

class header extends Component{
	render(){
		return(
			<header>
				<ul id="header-nav">
					<li><Link to="/index" className="header-nav-link">首页</Link></li>
					<li><Link to="/wenyi" className="header-nav-link">文艺范</Link></li>
					<li><Link to="/jishu" className="header-nav-link">技术宅</Link></li>
					<li><Link to="/about" className="header-nav-link">关于我</Link></li>
				</ul>
			</header>	
			
		)
	}
}

export default header;