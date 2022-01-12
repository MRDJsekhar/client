import { Typography, AppBar, Box, CssBaseline, Toolbar, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const NavBar=()=>{
    return(
        <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar >
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Typography variant='h6' gutterBottom component="div"><HomeIcon /><KeyboardArrowRightIcon />Asset Management</Typography>
        
              <Typography variant="h6" gutterBottom component="div">Meter Search</Typography>
        
            </Box>
        
          </Toolbar>
        </AppBar>
        </>

    )
}
export default NavBar