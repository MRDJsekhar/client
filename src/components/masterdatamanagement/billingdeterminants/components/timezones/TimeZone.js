import * as React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  direction: "row",
  flexDirection: "row",

}));


export default function Timezone() {


  return (

    <>

      <div style={{ flexDirection: 'row' }} sx={{ minWidth: 200 }}>


        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs="auto">
          <Typography variant='h7' gutterBottom >Timezone 1</Typography>
         </Grid>

          <Grid item xs="auto">
            <TextField
              id="time"
              label="Start Time"
              type="time"
              size="small"
              defaultValue="07:30"
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{
                step: 300 // 5 min
              }}
              sx={{ width: 200 }}
            />
          </Grid>


          <Grid item xs="auto">
            <TextField
              id="time"
              label="End Time"
              type="time"
              size="small"
              defaultValue="02:20"
              inputProps={{
                step: 300 // 5 min
              }}
              sx={{ width: 200 }}
            />
          </Grid>
          <Grid item xs="auto">
            <FormGroup   >
              <FormControlLabel control={<Switch defaultChecked color="secondary" justifyContent="center" />} label="Active" />
            </FormGroup>
          </Grid>
          </Grid>
      </div>
 
      
      <div style={{ display: 'center', flexDirection: 'row' }}>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={2}>
      <Button color="success"
          onClick={() => {
            alert('After submitting data cannot be deleted, would you like to proceed?');
          }}
        >
          Submit
        </Button>
  </Grid>
  <Grid item xs={2}>
        <Button
          onClick={() => {
            alert('All cleared');
          }}
        >
          Clear
        </Button>
        </Grid>
        </Grid>
      </div>
     

    </>

  );
}