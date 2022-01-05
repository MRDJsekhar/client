import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import MeterMasterSub from './MeterMasterSub';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';
import { Box } from '@mui/material';
import useStyles from './newmeter/useStyle';
import { CssBaseline } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import NavBar from './NavBar';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary
}));

const dropdowns = [
	{
		value: '1',
		label: 'South'
	},
	{
		value: '2',
		label: 'North'
	},
	{
		value: '3',
		label: 'East'
	},
	{
		value: '4',
		label: 'West'
	}
];

export function MeterMaster() {
	const dispatch = useDispatch();
	const classes = useStyles();
	return (
		<card>
			<NavBar />
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
							label="Discom:"
							defaultValue="TSSCPDL"
						/>

						<TextField
							id="outlined-select-currency-native"
							select
							required
							label="Region: "
							SelectProps={{
								native: true
							}}
						>
							{dropdowns.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</TextField>
					</Grid>
				</div>
				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Circle:"
						SelectProps={{
							native: true
						}}
					/>

					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Division:"
						SelectProps={{
							native: true
						}}
					/>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="SubDivision:"
						SelectProps={{
							native: true
						}}
					/>
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Section:"
						SelectProps={{
							native: true
						}}
					/>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="SubStation:"
						SelectProps={{
							native: true
						}}
					/>

					<TextField
						id="outlined-select-currency-native"
						select
						required
						label="Feeder:"
						SelectProps={{
							native: true
						}}
					/>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<div>
						<TextField id="outlined-select-currency-native" required label="DTR: " />
						<TextField id="outlined-select-currency-native" required label="Meter No: " />
					</div>
				</Grid>

				<Grid container direction="row" justifyContent="center" alignContent="center">
					<div>
						<TextField id="outlined-select-currency-native" required label="Service No: " />
						<TextField id="outlined-select-currency-native" required label="ConsumerName: " />
					</div>
				</Grid>
			</Box>

			<Stack paddingTop={2} spacing={3} direction="row" justifyContent="center">
				<Button variant="contained" onClick={() => dispatch({ type: 'search' })} style={{ cursor: 'pointer' }}>
					SEARCH
				</Button>
				<Button variant="contained">CLEAR</Button>
				<Button
					variant="contained"
					onClick={() => dispatch({ type: 'new-meter' })}
					style={{ cursor: 'pointer' }}
				>
					NEW METER
				</Button>
			</Stack>
		</card>
	);
}
