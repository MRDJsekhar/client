import React, { useState } from 'react';
import {
	Radio,
	RadioGroup,
	FormControlLabel,
	FormControl,
	Stack,
	Button,
	CssBaseline,
	AppBar,
	Toolbar,
	Typography,
	Box,
	TextField,
	Grid
} from '@mui/material';
import Home from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { simTypes, DCU } from './Dropdowns';

export default function SimMaster() {
	const initialValues = {
		selectServiceProvider: '',
		selectServiceType: '',
		phone: '',
		simNumber: '',
		selectServiceNumber: '',
		apnName: '',
		ipType: '',
		typeOfIp: '',
		ipAddress: ''
	};

	const [ values, setValues ] = useState(initialValues);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
		console.log(e.target)
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('InputFields', values);
		setValues({
			selectServiceProvider: '',
			selectServiceType: '',
			phone: '',
			simNumber: '',
			selectServiceNumber: '',
			apnName: '',
			ipType: '',
			typeOfIp: '',
			ipAddress: ''
		});
	};

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 2, width: '25ch' }
			}}
			noValidate
			autoComplete="off"
		>
			<CssBaseline />
			<AppBar position="relative">
				<Toolbar>
					<Box sx={{ width: '100%', maxWidth: 500 }}>
						<Typography variant="h6" gutterBottom component="div">
							<Home color="black" />
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
				label=" Select Service Provider"
				SelectProps={{
					native: true
				}}
				name="selectServiceProvider"
				value={values.selectServiceProvider}
				onChange={handleInputChange}
			>
				{simTypes.map((item) => (
					<option key={item.label} value={item.label}>
						{item.label}
					</option>
				))}
			</TextField>

			<TextField
				id="outlined-select-currency-native"
				select
				required
				label=" Select Service Type"
				SelectProps={{
					native: true
				}}
				name="selectServiceType"
				value={values.selectServiceType}
				onChange={handleInputChange}
			>
				{simTypes.map((item) => (
					<option key={item.label} value={item.label}>
						{item.label}
					</option>
				))}
			</TextField>

			<div>
				<TextField
					id="outlined-select-currency-native"
					required
					label="Phone"
					name="phone"
					value={values.phone}
					onChange={handleInputChange}
				/>

				<TextField
					id="outlined-select-currency-native"
					required
					label="SIM Number"
					name="simNumber"
					value={values.simNumber}
					onChange={handleInputChange}
				/>
			</div>
			<div>
				<TextField
					id="outlined-select-currency-native"
					select
					required
					label=" Select Service Number DCU"
					SelectProps={{
						native: true
					}}
					name="selectServiceNumber"
					value={values.selectServiceNumber}
					onChange={handleInputChange}
				>
					{DCU.map((item) => (
						<option key={item.label} value={item.label}>
							{item.label}
						</option>
					))}
				</TextField>

				<TextField
					id="outlined-select-currency-native"
					required
					label="APN Name"
					name="apnName"
					value={values.apnName}
					onChange={handleInputChange}
				/>
			</div>
			<Grid container direction="row" alignContent="Center" justifyContent="center" spacing={2}>
				<Grid item xs={3} />
				<Grid item xs={3}>
					<FormControl component="fieldset">
						<Typography
							variant="h6"
							alignItems="center"
							name="ipType"
							value={values.ipType}
							onChange={handleInputChange}
						>
							IP Type
						</Typography>

						<RadioGroup row aria-label="IP type" name="row-radio-buttons-group">
							<FormControlLabel value="static" control={<Radio />} label="Static" />
							<FormControlLabel value="dynamic" control={<Radio />} label="Dynamic" />
						</RadioGroup>
					</FormControl>
				</Grid>

				<Grid item xs={3}>
					<FormControl component="fieldset">
						<Typography
							variant="h6"
							alignItems="center"
							name="typeOfIp"
							value={values.typeOfIp}
							onChange={handleInputChange}
						>
							Type of IP
						</Typography>
						<RadioGroup row aria-label="Type of IP" name="row-radio-buttons-group">
							<FormControlLabel value="IPV4" control={<Radio />} label="IPV4" />
							<FormControlLabel value="IPV6" control={<Radio />} label="IPV6" />
						</RadioGroup>
					</FormControl>{' '}
				</Grid>
				<Grid item xs={3} />
			</Grid>

			<TextField
				id="outlined-select-currency-native"
				native="outlined"
				required
				label="IP Address"
				name="ipAddress"
				value={values.ipAddress}
				onChange={handleInputChange}
			/>
			<Stack spacing={2} direction="row" justifyContent="center">
				<Button variant="contained" color="success" onClick={handleSubmit}>
					SUBMIT{' '}
				</Button>
				<Button variant="contained">CLEAR</Button>
			</Stack>
		</Box>
	);
}
