import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container } from '@mui/material';
import { Tooltip } from '@mui/material';
import Menu from '@mui/material/Menu';
import { Grid } from '@mui/material';

const PTAppBar = () => {
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Grid container>
						<Grid item spacing={1}>
							<HomeIcon />
						</Grid>
						<Grid item spacing={1}>
							<ArrowForwardIosIcon />
						</Grid>
						<Grid item spacing={5}>
							<Typography variant="h6">Configuration</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant="subtitle1">Parameter Threshold Master</Typography>
						</Grid>
					</Grid>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default PTAppBar;
