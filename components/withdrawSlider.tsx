'use client'
import { Slider, styled, Box, Grid, Typography, Button, TextField } from "@mui/material";
import MuiInput from '@mui/material/Input';
import React, { useState, useEffect } from "react";
import { theme } from "../pages/_app";
import { PropaneSharp } from "@mui/icons-material";
import { useContractRead, usePrepareContractWrite, useContractWrite } from "wagmi";
import { abi  as ERC20abi} from "../abi/IERC20.json";
import {abi as StrategyAbi} from "../abi/IStrategyInterface.json";
import { useAccount } from "wagmi";
import {daiAdress, strategyAdress} from "../constants/constants";



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

export default function WithdrawSlider(props: SliderProps) {

   
  
    const [vaultBalance, setVaultBalance] = useState<number>(0);

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
      props.func(newValue);
      setVaultBalance(Number(VaultBalance) * (10e-18)* (newValue as number/100));

    };
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setVaultBalance(event.target.value === '' ? 0 : Number(event.target.value));
    };
  
    const handleBlur = () => {
      if (props.value < 0) {
        props.func(0);
      } else if (props.value > 100) {
        props.func(100);
      }
    };

    const { address : owner, isConnected, isConnecting } = useAccount() //from wagmi


    const { data: VaultBalance } = useContractRead({
      address: strategyAdress,
      abi: StrategyAbi,
      functionName: 'balanceOf',
      args: [owner],
    }) as { data: bigint};



    const {config : withdrawConfig } = usePrepareContractWrite({
      address: strategyAdress,
      abi: StrategyAbi,
      functionName: 'withdraw',
      args: [VaultBalance*BigInt(props.value)/BigInt(100), owner, owner],
    });

    const { data : withdrawData, isLoading, isSuccess, write : withdraw } = useContractWrite(withdrawConfig);

    

    console.log("Shares of Vault available %e", VaultBalance);
  
    return (
      <Box width={props.width}>
        <Typography id="input-slider" color={theme.palette.text.secondary} gutterBottom>
          Select Amout of Vault Shares to withdraw
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
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Withdraw Shares from Vault" variant="outlined" onChange={handleInputChange}/>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" component="div" paddingX={3}>
                {vaultBalance.toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={4} justifyContent={'flex-end'}>
            <Button variant="contained" size="large" onClick={() => withdraw?.()}>Withdraw Shares</Button>
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
