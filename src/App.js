import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/AppBarr';
import LoginPage from './pages/LoginPage';

const App = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route exact path="/home" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
