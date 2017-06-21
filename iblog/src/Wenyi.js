import React, { Component } from 'react';
class wenyi extends Component{
	render(){
		return (
			<div className="wenyi-con">
     		<h2>文艺范</h2>
     		<ul>
     			<li>
     			<img src={require("./fly1.jpg")} />
     			<p>只要有暂时一刻的离开。短暂恍惚，离开原路，正确的意识悄悄走失，那么便形同死者。</p>	
     			</li>
     			<li>
     			<img src={require("./fly2.jpg")} />
     			<p>　声音传来的地方，天空裂开透明的缝隙，撒下毛茸茸的水滴。落近了，才发现那不是雨，是飘扬在双眼里的蒲公英。比雪花更轻盈，比雨滴更稠密，直到仿佛整个宇宙的种子，都筛下来，填塞了一切空白。</p>	
     			</li>
     			<li>
     			<img src={require("./fly3.jpg")} />
     			<p>　傍晚是如同半流质态的向前延伸，凝滞而巨力的疲倦。有时的错觉是，不是自己在路面上前进，而是脚下的路不可抗拒地后卷。</p>	
     			</li>
     			<li>
     			<img src={require("./fly4.jpg")} />
     			<p>我像在你的声音里，如同这一切的你。我正在你的一切里，听见了你的声音。</p>	
     			</li>
     			<li>
     			<img src={require("./fly5.jpg")} />
     			<p>传说世界是这样归于安静的。河水缓慢侵蚀地表，草种徐徐散在风中，流光交错，花香漫长。落满在心里层层的尘埃，被月色款款洗去。所有尝试还乡的旅人，都还安眠在迷局。</p>	
     			</li>
     		</ul>
     		<audio src="http://up.haoduoge.com:82/mp3/2016-06-28/1467087399.mp3" id="audio" autoPlay controls></audio>
    </div>)
	}
}
export default wenyi;