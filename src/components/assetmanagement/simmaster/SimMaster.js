import React from 'react';
import { useState } from 'react';
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	FormLabel,
	Stack,
	Button,
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	Box,
	TextField,
	MenuItem
} from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import dropdowns from './data'


export function SimMaster() {
	const [ currency, setCurrency ] = useState('');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '30ch' }
			}}
			noValidate
			autoComplete="off"
		>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<Box sx={{ width: '100%', maxWidth: 300 }}>
						<Typography variant="h6" gutterBottom component="div">
							<Home/>
							<KeyboardArrowRightIcon />Asset Management
						</Typography>
						<Typography variant="h6" gutterBottom component="div">
							Maintain SIM
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>
			<Box sx={{ display: 'flex', p: 1, m: 1, bgcolor: 'background.paper', flexDirection: 'row' }} />
			<TextField
				id="outlined-select-currency-native"
				select
				required
				label="Select Service Provider"
				value={currency}
				onChange={handleChange}
				SelectProps={{
					native: true
				}}
			/>
			<TextField
				id="outlined-select-currency-native"
				select
				required
				label=" Select Service Type"
				value={currency}
				onChange={handleChange}
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

			<div>
				<TextField id="outlined-select-currency-native" required label="Phone" />

				<TextField id="outlined-select-currency-native" required label="SIM Number" />
			</div>
			<div>
				<TextField
					id="outlined-select-currency-native"
					select
					required
					label=" Select Service Number DCU"
					value={currency}
					onChange={handleChange}
					SelectProps={{
						native: true
					}}
				>
					{dropdowns.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>

				<TextField id="outlined-select-currency-native" required label="APN Name" />
			</div>
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">IP Type</FormLabel>

					<RadioGroup row aria-label="IP type" name="row-radio-buttons-group">
						<FormControlLabel value="static" control={<Radio />} label="Static" />
						<FormControlLabel value="dynamic" control={<Radio />} label="Dynamic" />
					</RadioGroup>
				</FormControl>
			</div>
			<div>
				<FormControl component="fieldset">
					<FormLabel component="legend">Type of IP</FormLabel>
					<RadioGroup row aria-label="Type of IP" name="row-radio-buttons-group">
						<FormControlLabel value="IPV4" control={<Radio />} label="IPV4" />
						<FormControlLabel value="IPV6" control={<Radio />} label="IPV6" />
					</RadioGroup>
				</FormControl>
			</div>
			<FormControl component="fieldset">
				<FormLabel component="legend">IP Address</FormLabel>
			</FormControl>

			<Stack paddingRight={30} spacing={2} direction="row" justifyContent="center">
				<Button variant="contained" color="success">
					SUBMIT
				</Button>
				<Button variant="contained">CLEAR</Button>
			</Stack>
		</Box>
	);
}
