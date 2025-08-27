import { Content, Sidebar } from "@/components";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import React from "react";

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await BlogsService.getCategorizedBlog(params.slug);
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getCategories();
  console.log(blogs);
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
        padding: "20px",
      }}
    >
      <Sidebar blogs={latestBlogs} categories={categories} />
      <Content blogs={blogs} />
    </Box>
  );
}
