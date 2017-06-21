import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Card } from 'antd';
const { Header, Sider, Content } = Layout;

class ContentTop extends React.Component {
  render() {
    return (
     <div className="con-top">
     		<h2>模板推荐</h2>
     		 <div className="con-top-wrap">
     		<Card style={{ width: 300 }} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image">
			      <img alt="example" width="100%" src={require("./top1.jpg")} />
			    </div>
			    <div className="custom-card">
			      <h3>Europe Street beat</h3>
			      <p>www.instagram.com</p>
			    </div>
			  </Card>
     		<Card style={{ width: 300 }} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image">
			      <img alt="example" width="100%" src={require("./top2.jpg")} />
			    </div>
			    <div className="custom-card">
			      <h3>Europe Street beat</h3>
			      <p>www.instagram.com</p>
			    </div>
			  </Card>
			  <Card style={{ width: 300 }} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image">
			      <img alt="example" width="100%" src={require("./top3.jpg")} />
			    </div>
			    <div className="custom-card">
			      <h3>Europe Street beat</h3>
			      <p>www.instagram.com</p>
			    </div>
			  </Card>
			  <Card style={{ width: 300 }} bodyStyle={{ padding: 0 }}>
			    <div className="custom-image">
			      <img alt="example" width="100%" src={require("./top4.jpg")} />
			    </div>
			    <div className="custom-card">
			      <h3>Europe Street beat</h3>
			      <p>www.instagram.com</p>
			    </div>
			  </Card>
     		</div>
     		
     		
     		
     		
     </div>
    );
  }
}

export default ContentTop;