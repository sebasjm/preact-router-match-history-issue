import { h } from 'preact';
import { Router } from 'preact-router';
import Match from "preact-router/match";
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';
import { createHashHistory } from 'history';

const App = () => {
	const customHistory = createHashHistory()
	return <div id="app">
		<Header />
		<Match>{({ path }) => <div style={{ padding: 10 }}>before &lt;Router/&gt; path: {path}</div>}</Match>
		<Router history={customHistory} />
		<Header />
		<Match>{({ path }) => <div style={{ padding: 10 }}>after &lt;Router/&gt; is the path: {path}</div>}</Match>

		<Router history={customHistory}>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
	</div>

}

export default App;
