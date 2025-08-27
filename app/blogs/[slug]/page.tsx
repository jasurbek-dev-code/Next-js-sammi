import { Sidebar } from "@/components";
import { BlogsService } from "@/services/blog.service";
import { estimatedTimeToRead } from "@/utils/time";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await BlogsService.getDetailedBlog(params.slug);
  const latestBlogs = await BlogsService.getLatestBlogs();
  const categories = await BlogsService.getCategories();
  return (
    <Box
      sx={{
        display: "flex",
        gap: "20px",
        flexDirection: { xs: "column", md: "row" },
        padding: "20px",
      }}
    >
      <Box width={{ xs: "100%", md: "70%" }}>
        <Box
          sx={{
            backgroundColor: "black",
            padding: "20px",
            boxShadow: "0px 8px 16px rgba(255,255,255,.1)",
            borderRadius: "8px",
          }}
          position={"relative"}
          width={"100%"}
          height={{ xs: "30vh", md: "50vh" }}
        >
          <Image
            src={blog.image.url}
            alt={blog.title}
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            marginTop: "30px",
            alignItems: "center",
          }}
        >
          <Avatar src={blog.author.avatar.url} alt={blog.author.name} />
          <Box>
            <Typography>{blog.author.name}</Typography>
            <Box sx={{ fontSize: "14px" }}>
              {format(new Date(blog.createdAt), "dd MMM, yyyy")} &#x2022;{" "}
              {estimatedTimeToRead(blog.description.text)}min read
            </Box>
          </Box>
        </Box>
        <Typography variant="h4" marginTop={"20px"}>
          {blog.title}
        </Typography>
        <Typography color="gray">{blog.excerpt}</Typography>
        <Divider />
        <div
          style={{ opacity: ".8" }}
          dangerouslySetInnerHTML={{ __html: blog.description.html }}
        />
      </Box>
      <Sidebar blogs={latestBlogs} categories={categories} />
    </Box>
  );
}
