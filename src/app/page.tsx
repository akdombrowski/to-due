import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import List from "@/components/lists/List";

export default function Home() {
  return (
    <Container maxWidth={false}>
      <List />
    </Container>
  );
}
