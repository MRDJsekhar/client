import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';

const SimAppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
						<HomeIcon style={{ color: 'black' }} />
					</IconButton>
					<IconButton size="large" edge="start" color="inherit" aria-label="open drawer">
						<ChevronRightIcon style={{ color: 'black' }} />
					</IconButton>
					<Typography>Asset Management</Typography>
				</Toolbar>
				<Typography style={{ marginRight: 'auto' }}>Maintain SIM</Typography>
			</AppBar>
		</Box>
	);
};
export default SimAppBar;
