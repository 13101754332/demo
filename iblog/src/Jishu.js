import React, { Component } from 'react';
class jishu extends Component{
	render(){
		return (
			<div className="con-main">
     		<h2>技术宅</h2>
     		<div className="con-main-wrap">
     			<div className="cm-left">
						<ul>
							<li>
								<h3>angular简介:轻松入门</h3>
								<figure>
									<div className="fig-img">
										<img src={require("./keji1.jpg")} />
									</div>
									<figcaption>
										<p>学习如何基于Angular构建应用程序，并复用代码和技能来构建适用于所有平台的应用。通过Web Worker和服务端渲染，达到在如今(以及未来）的Web平台上所能达到的最高速度。使用简单的声明式模板，快速实现各种特性。使用自定义组件和大量现有组件，扩展模板语言。从原型到全球部署，Angular都能带给你支撑Google大型应用的那些高延展性基础设施与技术。</p>
										<a href="http://www.runoob.com/angularjs/angularjs-tutorial.html">阅读全文</a>
									</figcaption>
								</figure>
							</li>
							<li>
								<h3>react从入门到进阶,为你打开一扇新的大门</h3>
								<figure>
									<div className="fig-img">
										<img src={require("./keji2.jpg")} />
									</div>
									<figcaption>
										<p>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。由于 React 的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。</p>
										<a href="https://facebook.github.io/react/">阅读全文</a>
									</figcaption>
								</figure>
							</li>
							<li>
								<h3>扬帆起航:用vue构建一艘游轮带你征服星辰大海</h3>
								<figure>
									<div className="fig-img">
										<img src={require("./keji3.jpg")} />
									</div>
									<figcaption>
										<p>Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。
如果你是有经验的前端开发者，想知道 Vue.js 与其它库/框架的区别，查看对比其它框架。</p>
										<a href="https://cn.vuejs.org/v2/guide/">阅读全文</a>
									</figcaption>
								</figure>
							</li>
							<li>
								<h3>前端框架天下三分：Angular React 和 Vue的比较</h3>
								<figure>
									<div className="fig-img">
										<img src={require("./keji4.jpg")} />
									</div>
									<figcaption>
										<p>前端越来越混乱了，当然也可以美其名曰：繁荣。
当新启动一个前端项目，第一件事就是纠结：使用什么框架，重造什么轮子？

PS:大牛留言讨论
那么，希望看完此篇，能够给你一个清晰的认识，或者让你更加地纠结和无所适从 = =！
本篇拿一注册功能作为样本，使用各种框架去实现功能，从而对比各种方式的优劣。</p>
										<a href="http://blog.csdn.net/haoshidai/article/details/52346865">阅读全文</a>
									</figcaption>
								</figure>
							</li>
						</ul>
					</div>
					<div className="cm-right">
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
						<p><a>今天天气不错,适合睡觉</a></p>
					</div>
     		</div>
    </div>)
	}
}
export default jishu;