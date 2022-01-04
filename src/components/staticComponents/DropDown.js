import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

export default function SimpleAccordion() {
	const dispatch = useDispatch();
	return (
		<Grid container>
			<Grid item>
				<Accordion disableGutters>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>𝐀𝐬𝐬𝐞𝐭 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography
							gutterBottom
							onClick={() => dispatch({ type: 'meter-master' })}
							style={{ cursor: 'pointer' }}
						>
							Meter Master
						</Typography>
						<Typography
							gutterBottom
							onClick={() => dispatch({ type: 'dcu-master' })}
							style={{ cursor: 'pointer' }}
						>
							DCU Master
						</Typography>
						<Typography onClick={() => dispatch({ type: 'sim-master' })} style={{ cursor: 'pointer' }}>
							Sim Master
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>𝐌𝐚𝐬𝐭𝐞𝐫 𝐝𝐚𝐭𝐚 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography gutterBottom>Billing Determinants</Typography>
						<Typography onClick={() => dispatch({ type: 'pt-master' })} style={{ cursor: 'pointer' }}>Parameter Threshold Master</Typography>
					</AccordionDetails>
				</Accordion>
			</Grid>
		</Grid>
	);
}
