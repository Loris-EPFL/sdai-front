'use client'
import { useState } from "react";
import { Grid, Typography, Box, TextField, Button} from '@mui/material';
import DepositSlider from "./depositSlider";
import WithdrawSlider from "./withdrawSlider";



export function DepositField() {
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState<number>(
        30,
      );

    return(
        <Box>
            <Grid container direction="row"  paddingBottom={4} >
              <Grid item xs display={'flex'} justifyContent={'flex-start'}>
                <Button onClick={() => setToggle(true)} variant="contained">Deposit</Button>
              </Grid>
              <Grid item xs display={'flex'} justifyContent={'flex-end'}>
                <Button onClick={() => setToggle(false)} variant="contained">Withdraw</Button>
              </Grid>

            </Grid>
            <Grid>
            {toggle ? (
              <DepositSlider />
            ) : (

              <WithdrawSlider />

            )}
            </Grid>
        </Box>

    )

}
