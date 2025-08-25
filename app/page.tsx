import { Content, Hero, Sidebar } from "@/components";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Hero />
      <Box sx={{ display: "flex", gap: "20px",flexDirection:{xs:"column",md:"row"} ,padding:"20px"}}>
        <Sidebar />
        <Content />
      </Box>
    </>
  );
}
