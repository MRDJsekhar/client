import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';

export default function NextYear() {
	const [ value, setValue ] = React.useState(null);

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					p: 1,
					m: 1,
					bgcolor: 'background.paper'
				}}
			>
				<AddCircleIcon />

				<Grid container spacing={2} columns={16}>
					<Grid item xs={8}>
						<TextField id="outlined-basic" label="Holiday" variant="outlined" />
					</Grid>

					<Grid item xs={8}>
						<DatePicker
							label="Next year"
							size="small"
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Grid>

					<Button
						onClick={() => {
							alert('After submitting data cannot be deleted, would you like to proceed?');
						}}
					>
						submit
					</Button>
					<Button
						onClick={() => {
							alert('error');
						}}
					>
						clear
					</Button>
				</Grid>

				<IndeterminateCheckBoxIcon />
			</Box>
		</LocalizationProvider>
	);
}
