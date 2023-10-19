import { useState } from "react";
import { Grid, Typography, Box, TextField} from '@mui/material';
import InputSlider from "./depositSlider";


export function DepositField() {
    const [toggle, setToggle] = useState(true);
    const [value, setValue] = useState<number | string | Array<number | string>>(
        30,
      );

    return(
        <Box>
            {toggle ? (
              <InputSlider width={380} value={value} func={setValue}/>
            ) : (

              <InputSlider width={380} value={value} func={setValue}/>

            )}
        </Box>

    )

}
