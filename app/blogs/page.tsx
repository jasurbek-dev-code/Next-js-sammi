import { Content } from "@/components";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import React from "react";

export default async function Page() {
  const blogs = await BlogsService.getAllBlogs();
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
        padding: "20px",
        justifyContent:"center"
      }}
    >
      <Content blogs={blogs} />
    </Box>
  );
}
