import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LabelScanner from './pages/label-scanner';
import { Navigation } from './components/navigation';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const items = {
	items: [
		{ label: 'home', url: '/' },
		{ label: 'scan', url: '/scan' },
	],
};
root.render(
	<React.StrictMode>
		<div className="bg-theme-blue text-theme-cream min-h-screen">
			<Navigation {...items} />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/scan" element={<LabelScanner />} />
				</Routes>
			</BrowserRouter>
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
