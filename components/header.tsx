import DesktopOnly from '../responsiveness/DesktopOnly';
import logo from "../../images/logo/logo_header.svg";
import logotext from "../images/logo/logo_text_header.svg";
import MobileOnly from '../responsiveness/MobileOnly';
import Image from "next/image";
import { useState } from 'react'
import dynamic from "next/dynamic"
//import Wallet from "./WalletConnect";
import { HeaderButton } from '../ComponentBank/ComponentBank';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Nav() {
    return (
      <Box flexGrow={1} paddingBottom={14}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
              
            >
              <Image src={logo} alt="" />
            </IconButton>
            <Grid container  spacing={0}>
                <Grid item xs={4} container flexGrow={1} spacing={4}>
                    
                    <Grid item  display="flex" justifyContent={'flex-start'} alignItems={'center'} >
                        <Typography variant="h5" component="div" >
                            <HeaderButton target="" text="Pools" href="/Pools"/>
                        </Typography>
                    </Grid>
                    <Grid item  display="flex" justifyContent={'flex-start'} alignItems={'center'} >
                        <Typography variant="h5" component="div" >
                            <HeaderButton target="" text="Vaults" href="/Vaults"/>
                        </Typography>
                    </Grid>
                    <Grid item display="flex" justifyContent={'flex-start'} alignItems={'center'} >

                        <Typography variant="h5" component="div" >
                            <HeaderButton target="" text="Explorer" href="/explore"/>
                        </Typography>
                    </Grid>
                    <Grid item  display="flex" justifyContent={'flex-start'} alignItems={'center'} >
                        <IconButton>
                            <MoreHorizIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                
                    <Grid item xs={8}  display="flex"justifyContent={'flex-end'}><ConnectButton chainStatus={{smallScreen: "icon", largeScreen: "icon"}} showBalance={{ smallScreen: false, largeScreen: false }}/></Grid>
            </Grid> 
            
          </Toolbar>
        </AppBar>
      </Box>
    );
  }