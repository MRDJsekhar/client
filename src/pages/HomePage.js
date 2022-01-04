import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/staticComponents/Header';
import SideBar from '../components/staticComponents/SideBar';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SelectedComponent from './SelectedComponent';
import DummyComponent from '../components/DummyComponent';

const HomePage = () => {
	const component = useSelector((state) => state.componentChange.component);
	useEffect(() => {}, []);

	return (
		<div>
			<Grid container >
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid item xs={3} >
					<SideBar />
				</Grid>
				<Grid item xs={9}>
					{component ? <SelectedComponent component={component} /> : <DummyComponent />}
				</Grid>
			</Grid>
		</div>
	);
};

export default HomePage;
