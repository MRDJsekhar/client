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
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CloudIcon from '@mui/icons-material/Cloud';
import { Grid } from '@mui/material';
import DropDown from '../components/DropDown';

export default function AppBarr() {
	const [ auth, setAuth ] = React.useState(true);
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const handleChange = (event) => {
		setAuth(event.target.checked);
	};
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const theme = {
		spacing: [ 0, 2, 3, 5, 8 ]
	};
	const Item = styled(Paper)(({ theme }) => ({
		...theme.typography.body2,

		padding: theme.spacing(1),

		textAlign: 'center',

		color: theme.palette.text.secondary
	}));

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
					<NotificationsNoneIcon />
					<MainSearch />

					<AccountCircleIcon />
				</Toolbar>
			</AppBar>
			<DropDown />
		</Box>
	);
}
