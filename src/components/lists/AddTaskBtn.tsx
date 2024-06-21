import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function AddTaskBtn() {
  return (
    <Fab
      color="primary"
      aria-label="add"
    >
      <AddIcon />
    </Fab>
  );
}
