import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid, Link } from '@mui/material';

export default function SimpleAccordion() {
	return (
		<Grid container xs={3}>
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
						<Typography gutterBottom>
							<Link href="mm" color="inherit" underline="none">
								Meter Master
							</Link>
						</Typography>
						<Typography gutterBottom>DCU Master</Typography>
						<Typography>Sim Master</Typography>
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
						<Typography>Parameter Threshold Master</Typography>
					</AccordionDetails>
				</Accordion>
			</Grid>
		</Grid>
	);
}
