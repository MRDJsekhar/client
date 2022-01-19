import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	'&:not(:last-child)': {
		borderBottom: 0
	},
	'&:before': {
		display: 'none'
	}
}));

const AccordionSummary = styled((props) => (
	<MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)'
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1)
	}
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function CustomizedAccordions() {
	const [ expanded, setExpanded ] = useState('panel1');
	const dispatch = useDispatch();

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
					<Typography>Asset Management</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'meter-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Meter Master
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'dcu-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						DCU Master
					</Typography>
					<Typography
						onClick={() => {
							dispatch({ type: 'sim-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						SIM Master
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
					<Typography>Master Data Management</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'billing-determinants' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Billing Determinants
					</Typography>
					<Typography
						onClick={() => {
							dispatch({ type: 'pt-master' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Parameter Threshold Master
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
				<AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
					<Typography>Reports</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'am-summary' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Summary
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'am-installed' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Installed
					</Typography>
					<Typography
						gutterBottom
						onClick={() => {
							dispatch({ type: 'am-communicated' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Communicated
					</Typography>
					<Typography
						onClick={() => {
							dispatch({ type: 'am-commissioned' });
						}}
						style={{ cursor: 'pointer' }}
					>
						Asset Mgmt-Commissioned
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
