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
            <Grid container direction="row" justifyContent="center" alignItems="center" paddingBottom={4}>
              <Grid item xs justifyContent={'flex-start'}>
                <Button onClick={() => setToggle(true)} variant="contained">Deposit</Button>
              </Grid>
              <Grid item xs justifyContent={'flex-end'}>
                <Button onClick={() => setToggle(false)} variant="contained">Withdraw</Button>
              </Grid>

            </Grid>
            {toggle ? (
              <DepositSlider width={500} value={value} func={setValue}/>
            ) : (

              <WithdrawSlider width={500} value={value} func={setValue}/>

            )}
        </Box>

    )

}
