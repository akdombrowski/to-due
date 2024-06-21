import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import List from "@/components/lists/List";
import AddTaskBtn from "@/components/lists/AddTaskBtn";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Grid
        container
        spacing={3}
        width="100%"
      >
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
        >
          <Typography variant="h1">Your Tasks</Typography>
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="stretch"
        >
          <List />
        </Grid>
        <Grid
          xs={12}
          display="flex"
          justifyContent="flex-end"
          alignItems="stretch"
        ></Grid>
      </Grid>
      <Box id="mainPageAddTaskBtnBoxWrapper" display="flex" justifyContent="flex-end">
        <AddTaskBtn />
      </Box>
    </Container>
  );
}
