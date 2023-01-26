import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
	return (
		<div className="App">
			<Intro />
			<Portfolio />
			<Timeline />
			<Contact />
		</div>
	);
}

export default App;
