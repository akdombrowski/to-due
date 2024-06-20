import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function List() {

  return (
    <Grid container>
      <Grid xs={12}>
      <TextField id="outlined-basic" label="Task" variant="outlined" />
      </Grid>
    </Grid>
  )
}
