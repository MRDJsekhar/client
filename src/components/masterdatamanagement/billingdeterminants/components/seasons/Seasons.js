import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Seasons() {
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
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
					<Grid item xs={1}>
						<Typography variant="h7" gutterBottom>
							Season 1
						</Typography>
					</Grid>

					<Grid item xs={2}>
						<DatePicker
							label="Start Date"
							variant="Standard"
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Grid>

					<Grid item xs={2}>
						<DatePicker
							label="End Date"
							size="small"
							variant="Standard"
							value={value}
							onChange={(newValue) => {
								setValue(newValue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>
					</Grid>
				</Grid>
			</Box>
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
		</LocalizationProvider>
	);
}
