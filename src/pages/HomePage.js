import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MainSearch from '../components/MainSearch';
import CloudIcon from '@mui/icons-material/Cloud';
import { Grid } from '@mui/material';
import DropDown from '../components/DropDown';
import Badge from '@mui/material/Badge';
import AccountComponent from '../components/AccountComponent';

export default function HomePage() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Grid container spacing={2}>
						<Grid item xs={0}>
							<CloudIcon />
						</Grid>
						<Grid item xs={2}>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								AMI SUITE
							</Typography>
						</Grid>
					</Grid>
					<Menu>
						<MenuItem />
					</Menu>
					<StarIcon sx={{ marginLeft: 'auto' }} />
					<SettingsIcon sx={{ minWidth: 100 }} />
					<Badge badgeContent={3} color="success">
						<NotificationsNoneIcon />
					</Badge>
					<MainSearch />
					<AccountComponent />
				</Toolbar>
			</AppBar>
			<DropDown />
		</Box>
	);
}
