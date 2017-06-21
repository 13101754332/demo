import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Index from './content';
import Wenyi from './Wenyi';
import Jishu from './Jishu';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Router,route,IndexRoute,browserHistory,Link} from "react-router"
ReactDOM.render(<Router history={browserHistory}>
		<route path="/" component={App}>
			<IndexRoute component={Index}></IndexRoute>
			<route path="/index" component={Index}></route>
			<route path="/wenyi" component={Wenyi}></route>
			<route path="/jishu" component={Jishu}></route>
			<route path="/about" component={About}></route>
		</route>
	</Router>, document.getElementById('root'));
registerServiceWorker();
