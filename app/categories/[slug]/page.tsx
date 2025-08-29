import { Content, Sidebar } from "@/components";
import { BlogsService } from "@/services/blog.service";
import { Box } from "@mui/material";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
interface BlogCategoryPageProps {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: BlogCategoryPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
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

export default async function Page({ params }: BlogCategoryPageProps) {
  const blogs = await BlogsService.getCategorizedBlog(params.slug);
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