import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const Change = () => {
	const verifyField = () => {
		alert('verified');
	};
	const clear = () => {
		alert('verified');
	};
	return (
		<Grid container direction="column" alignItems="center" justify="center">
			<h5>Please Enter & Verify the Consume Number Before Proceeding</h5> <br />
			<TextField id="Consumer No" label="Consumer Service No" variant="standard" />
			<Button onClick={verifyField}>Verify</Button>
			<Button variant="outlined" color="error" onClick={clear}>
				Clear
			</Button>
		</Grid>
	);
};
export default Change;
