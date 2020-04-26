import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Fib from './Fib';
import AnotherPage from './AnotherPage';

function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Hello Kubernetes !!!!!!!!!!!!</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<Link to="/">Home</Link>
					<Link to="/anotherPage">Other page</Link>
				</header>
				<div>
					<Switch>
						<Route exact path="/">
							<Fib />
						</Route>
						<Route path="/anotherPage">
							<AnotherPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
