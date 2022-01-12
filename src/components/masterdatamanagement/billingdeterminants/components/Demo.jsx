import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import { DatePicker } from '@mui/lab';
import { makeStyles } from '@material-ui/core/styles';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		}
	},
	button: {
		margin: theme.spacing(1)
	}
}));

function Demo() {
	const classes = useStyles();
	const [ inputFields, setInputFields ] = useState([ { id: uuidv4(), holiday: '', value: '' } ]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('InputFields', inputFields);
	};

	const handleChangeInput = (id, event) => {
		const newInputFields = inputFields.map((i) => {
			if (id === i.id) {
				i[event.target.name] = event.target.value;
			}
			return i;
		});

		setInputFields(newInputFields);
	};

	const handleAddFields = () => {
		setInputFields([ ...inputFields, { id: uuidv4(), holiday: '', value: '' } ]);
	};

	const handleRemoveFields = (id) => {
		const values = [ ...inputFields ];
		values.splice(values.findIndex((value) => value.id === id), 1);
		setInputFields(values);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<form className={classes.root} onSubmit={handleSubmit}>
				{inputFields.map((inputField) => (
					<div key={inputField.id}>
						<IconButton onClick={handleAddFields}>
							<AddIcon />
						</IconButton>
						<TextField
							name="Holiday"
							label="First Name"
							variant="filled"
							value={inputField.firstName}
							onChange={(event) => handleChangeInput(inputField.id, event)}
						/>

						<DatePicker
							label="Next year"
							size="small"
							value={inputField.value}
							onChange={(event) => handleChangeInput(inputField.id, event)}
							onChange={(newvalue) => {
								setInputFields(newvalue);
							}}
							renderInput={(params) => <TextField {...params} />}
						/>

						<IconButton
							disabled={inputFields.length === 1}
							onClick={() => handleRemoveFields(inputField.id)}
						>
							<RemoveIcon />
						</IconButton>
					</div>
				))}
				<Button
					className={classes.button}
					variant="contained"
					color="primary"
					type="submit"
					endIcon={<Icon>send</Icon>}
					onClick={handleSubmit}
				>
					Submit
				</Button>
			</form>
		</LocalizationProvider>
	);
}

export default Demo;
