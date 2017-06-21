import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Card } from 'antd';
const { Header, Sider, Content } = Layout;

class ContentMain extends React.Component {
  render() {
    return (
    <div className="con-main">
     		<h2>推荐文章</h2>
     		<div className="con-main-wrap">
     			<div className="cm-left">
						<ul>
							<li>
								<h3>我的个人博客总共展示了三个版本</h3>
								<figure>
									<div className="fig-img">
										<img src={require("./home1.jpg")} />
									</div>
									<figcaption>
										<p>我的个人博客总共展示了三个版本，界面也经历了由“简单”到“复杂”再到“简单”，颜色从“色泽单一”到“五彩斑斓”再到“局部点缀”的过程。原来一年一个版本！而每次改版的契机都是被百度惩罚！界面不要频繁更换！好好检查代码，有没有冗余、结构有没有不合理的地方。</p>
										<a href="#">阅读全文</a>
									</figcaption>
								</figure>
							</li>
							<li>
								<h3>我的个人博客总共展示了三个版本</h3>
								<figure>
									<div className="fig-img">
										<img src={require("./home2.jpg")} />
									</div>
									<figcaption>
										<p>我的个人博客总共展示了三个版本，界面也经历了由“简单”到“复杂”再到“简单”，颜色从“色泽单一”到“五彩斑斓”再到“局部点缀”的过程。原来一年一个版本！而每次改版的契机都是被百度惩罚！界面不要频繁更换！好好检查代码，有没有冗余、结构有没有不合理的地方。</p>
										<a href="#">阅读全文</a>
									</figcaption>
								</figure>
							</li>
							<li>
								<h3>我的个人博客总共展示了三个版本</h3>
								<figure>
									<div className="fig-img">
										<img src={require("./home3.jpg")} />
									</div>
									<figcaption>
										<p>我的个人博客总共展示了三个版本，界面也经历了由“简单”到“复杂”再到“简单”，颜色从“色泽单一”到“五彩斑斓”再到“局部点缀”的过程。原来一年一个版本！而每次改版的契机都是被百度惩罚！界面不要频繁更换！好好检查代码，有没有冗余、结构有没有不合理的地方。</p>
										<a href="#">阅读全文</a>
									</figcaption>
								</figure>
							</li>
						</ul>
					</div>
					<div className="cm-right">
						<h2>最新文章</h2>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<h2>模版排行 </h2>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<h2>友情链接  </h2>
						<p>
						<a href='www.baidu.com' className="frends">百度</a>
						<a href='www.jd.com' className="frends">京东</a>
						<a href='www.taobao.com' className="frends">淘宝</a>
						<a href='www.tianmao.com' className="frends">天猫</a>
						</p>
						
					</div>
     		</div>
    </div>
    );
  }
}

export default ContentMain;