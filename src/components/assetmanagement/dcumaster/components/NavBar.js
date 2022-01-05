import { Typography, AppBar, Box, CssBaseline, Toolbar, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BasicTabs from '../dcumasterpage/DCUMaster';


const  NavBar=()=>  {
  return (
    <>
    <CssBaseline />
    <AppBar position="relative">
        <Toolbar > 
        <Box sx={{ width: '100%', maxWidth: 500 }}>
          
    <Typography  variant='h6' gutterBottom component="div"><HomeIcon color="black"/><KeyboardArrowRightIcon/>Asset Management</Typography>
          <Typography variant="h6" gutterBottom component="div">Maintain DCU</Typography>
          </Box>
        </Toolbar>
    </AppBar>
    <BasicTabs />
    </>
  );
}
export default NavBar;