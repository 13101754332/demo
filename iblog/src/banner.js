import React, { Component } from 'react';

class banner extends Component{
	render(){
		return(
			<div id="banner">
				<p>缓缓飘落的枫叶像思念</p>			
				<p>为何挽回要赶在冬天来之前</p>			
				<p>极光掠过天边</p>			
				<p>北风掠过想你的容颜</p>			
				<div id="person">
					<img src={require("./person.jpg")} />
					<h4>Run</h4>
				</div>
			</div>
		)
	}
}



export default banner;