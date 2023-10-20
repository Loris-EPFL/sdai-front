import * as React from 'react';
import logo from '../images/dai-logo.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Image from "next/image";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ color : '#151515'}}>
      
      <AppBar position="static">
        <Toolbar sx={{backgroundColor : '#151515'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              <Image src={logo} 
              alt="" 
              width={50}
              height={50}/>
          </IconButton>
          <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
            Vault
          </Typography>
          <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
            About
          </Typography>
          <Typography variant="h6" component="div" paddingX={3} color={'#ffffff'}>
            Vote
          </Typography>
          <Grid item xs display={'flex'} justifyContent={'flex-end'}>
            <ConnectButton />
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}