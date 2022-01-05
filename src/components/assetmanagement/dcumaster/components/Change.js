import React from 'react';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import DropdownClass from '../dcumasterpage/DcuMastersub';
import { styled } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import useStyles from './UseStyle';
import { CssBaseline } from '@mui/material';
import BasicDatePicker from './BasicDatePicker';
import DateOfInstallation from './DateOfInstallation';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary
}));

const Change = () => {
	const classes = useStyles();
	return (
		<card>
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { m: 2, width: '25ch' }
				}}
				noValidate
				autoComplete="off"
			>
				<CssBaseline />

				<Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row' }} />

				<div>
					<Grid container direction="row" justifyContent="center" alignContent="center">
						<TextField
							id="outlined-select-currency-native"
							required
							label="Existing Device Serial Number :"
						/>

						<BasicDatePicker />
					</Grid>
				</div>
				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField id="outlined-select-currency-native" required label="New Device Serial Number :" />

					<DateOfInstallation />
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						id="outlined-select-currency-native"
						required
						label="Reason For Change :"
						SelectProps={{
							native: true
						}}
					/>
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Status :"
						SelectProps={{
							native: true
						}}
					>
						<DropdownClass />
					</TextField>
				</Grid>
			</Box>
			<Stack spacing={2} direction="row" justifyContent="center">
				<Button variant="outlined" color="error">
					Clear
				</Button>
				<Button variant="contained">Submit</Button>
			</Stack>
			<br />
		</card>
	);
};
export default Change;
