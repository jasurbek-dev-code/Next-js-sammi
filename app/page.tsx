
import { Content, Hero, Sidebar } from "@/components";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";

export default async function Home(  ) {
  const blogs = await BlogsService.getAllBlogs();
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getCategories();
  return (
    <>
      <Hero blogs={blogs.slice(0,3)}/>
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
    </>
  );
}
