import * as React from 'react';
import Button from '@mui/material/Button';



export default function Submit(){

    return(
        <>
        <Button
          variant="contained" 
          color="primary" 
          type="submit" 
          onClick={() => {
            alert('After submitting data cannot be deleted, would you like to proceed?');
            }}
          >Submit</Button>

        <Button
          variant="contained" 
          color="primary" 
          type="clear" 
          onClick={() => {
            alert('After submitting data cannot be deleted, would you like to proceed?');
            }}
          >Clear</Button>
     </>
    )
}