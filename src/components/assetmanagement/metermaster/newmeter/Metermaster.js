import React from 'react';
import { TextField, Button, Grid, Stack } from '@mui/material';
import useStyles from './useStyle';

const Metermaster = () => {
	const verifyField = () => {
		alert('verified');
	};
	const clear = () => {
		alert('cleared');
	};
	return (
		<Grid container direction="column" alignItems="center" justify="center">
			<form noValidate autoComplete="off">
				<h5>
					{' '}
					Please Enter & Verify The Consume Number
					<br />Before Proceeding
				</h5>
				<br />

				<TextField id="Consumer No" label="Consumer Service No" variant="standard" />
				<Button onClick={verifyField}>Verify</Button>
			</form>
			<br />
			<Stack spacing={2} direction="row">
				<Button variant="outlined" color="error" onClick={clear}>
					Clear
				</Button>
			</Stack>
		</Grid>
	);
};
export default Metermaster;
