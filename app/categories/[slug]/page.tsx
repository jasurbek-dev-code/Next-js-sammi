import { Content, Sidebar } from "@/components";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: "All blogs about IT",
    keywords: ["IT", "programming", "frontend", "nextjs"],
    authors: [
      {
        name: "Samar Badriddinov",
        url: "https://github.com/jasurbek-dev-code",
      },
    ],
    icons: {
      icon: "/vercel.svg",
      shortcut: "/vercel.svg",
      apple: "/vercel.svg",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await BlogsService.getCategorizedBlog(slug);
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
      <Sidebar blogs={latestBlogs} categories={categories} />
      <Content blogs={blogs} />
    </Box>
  );
}
