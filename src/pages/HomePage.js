import { Grid } from '@mui/material';
import React from 'react';
import Header from '../components/staticComponents/Header';
import SideBar from '../components/staticComponents/SideBar';
import { useSelector } from 'react-redux';
import SelectedComponent from './SelectedComponent';
import DummyComponent from '../components/DummyComponent';

const HomePage = () => {
	const component = useSelector((state) => state.componentChange.component);

	return (
		<div>
			<Grid container>
				<Grid container direction="row">
					<Grid item xs={12}>
						<Header />
					</Grid>
				</Grid>
				<Grid container direction="row">
					<Grid item xs={3}>
						<SideBar />
					</Grid>
					<Grid item xs={9}>
						{component ? <SelectedComponent component={component} /> : <DummyComponent />}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default HomePage;
