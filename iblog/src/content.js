import React, { Component } from 'react';
import Banner from "./banner.js";
import ContentTop from "./content-top.js"
import ContentMain from "./content-main.js"
class Content extends Component{
	render(){
		return (
			<div id="content">
				<Banner></Banner>
				<ContentTop></ContentTop>
				<ContentMain></ContentMain>
			</div>)
	}
}
export default Content;