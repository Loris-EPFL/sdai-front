import { Slider, styled, Box, Grid, Typography, Button, TextField } from "@mui/material";
import MuiInput from '@mui/material/Input';
import React, { useState, useEffect } from "react";
import { theme } from "../pages/_app";
import { PropaneSharp } from "@mui/icons-material";
import { useContractRead } from "wagmi";
import { abi } from "../abi/IERC20.json";
import { useAccount } from "wagmi";



export const StyledSlider = styled(Slider)(({theme}) => ({

    margin: 'auto',


}))

export const StyledText = styled(Typography)(({theme}) => ({

    fontFamily: 'Inter'

}))

const StyledButton =  styled(Button, {shouldForwardProp: (prop) => prop !== "color" && prop !== 'myProp',})<{ props : {width : number, height : number, color : string} }> (({theme,props, children}) => ({

    padding: 8,
    color : "#FB118E",
    borderRadius : 8,
    justifyContent: 'center',
    textTransform: 'none',
    backgroundColor: "#FDEAF1",
    '&:hover': {
        backgroundColor: '#feedf7',
        color: "#FB118E",
    },

    
}))



interface SliderProps{
    width?: number;
    func : Function;
    value: number;
}

export default function InputSlider(props: SliderProps) {

    const daiAdress = '0x6b175474e89094c44da98b954eedeac495271d0f';
  
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      props.func(newValue);
    };
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.func(event.target.value === '' ? '' : Number(event.target.value));
    };
  
    const handleBlur = () => {
      if (props.value < 0) {
        props.func(0);
      } else if (props.value > 100) {
        props.func(100);
      }
    };

    const { address : owner, isConnected, isConnecting } = useAccount() //from wagmi


    const { data: TokenBalance, error } = useContractRead({
      address: daiAdress,
      abi: abi,
      functionName: 'balanceOf',
      args: [owner],
    }) as { data: bigint; error: Error };

    const displayTokenBalance = (Number(TokenBalance) * 10**(-18)).toFixed(2);

    

    console.log(TokenBalance);
  
    return (
      <Box width={props.width}>
        <Typography id="input-slider" color={theme.palette.text.secondary} gutterBottom>
          Select Amout of DAI to deposit
        </Typography>
        <Grid container spacing={9} alignItems="center" paddingBottom={4}>
            <Grid item xs={2} paddingX={3}>
                <StyledText
            
                onChange={handleInputChange}
                onBlur={handleBlur}
                variant="h4"
                >{props.value}%
                </StyledText>

            </Grid>

            <Grid item xs={2}>
                <StyledButton props={{width: 10, height: 20, color : theme.palette.secondary.main}} size="small" onClick={() => props.func(25)}>
                    25%
                </StyledButton>
            </Grid>

            <Grid item xs={2}>
                <StyledButton props={{width: 10, height: 20, color : theme.palette.secondary.main}} size="small" onClick={() => props.func(50)}>
                    50%
                </StyledButton>
            </Grid>

            <Grid item xs={2}>
                <StyledButton props={{width: 10, height: 20, color : theme.palette.secondary.main}} size="small" onClick={() => props.func(75)}>
                    75%
                </StyledButton>
            </Grid>

            <Grid item xs={2}>
                <StyledButton props={{width: 10, height: 20, color : theme.palette.secondary.main}} size="small" onClick={() => props.func(100)}>
                    Max
                </StyledButton>
            </Grid>

        </Grid>
        <Grid container alignItems={'center'}>
          <Grid item xs={8}>
          <TextField id="outlined-basic" label="Deposit" variant="outlined" value={displayTokenBalance* props.value/100}/>
          </Grid>
          <Grid item xs={4} justifyContent={'flex-end'}>
            <Button variant="contained" size="large">Deposit</Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center" justifyContent='center' marginTop={2}>
          
          <Grid item xs>
            <StyledSlider
              value={typeof props.value === 'number' ? props.value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
              color="secondary"
            />
          </Grid>
          
        </Grid>
      </Box>
    );
  }

