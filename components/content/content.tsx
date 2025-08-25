import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {format} from "date-fns"
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Technical SEO with Hygraph",
    excerpt:
      "Get started with your SEO implementation when using a Headless CMS",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
  {
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Union Types and Sortable Relations with Hygraph",
    excerpt:
      "Learn more about Polymorphic Relations and Sortable Relations with Hygraph",
    author: {
      name: "Samar Badriddinov",
      image: "https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx",
    },
  },
];
export default function Content() {
  return (
    <Box width={{ xs: "100%", md: "70%" }} height={"200vh"}>
      {data.map((item) => (
        <Box
          key={item.image}
          sx={{
            backgroundColor: "rgba(0,0,0,.5)",
            padding: "20px",
            marginTop: "20px",
            boxShadow: "0px 8px 16px rgba(255,255,255,.1)",
            borderRadius: "8px",
          }}
        >
          <Box
            position={"relative"}
            width={"100%"}
            height={{ xs: "30vh", md: "50vh" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography variant="h4" sx={{ marginTop: "20px" }}>
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "gray" }}>
            {item.excerpt}
          </Typography>
          <Divider sx={{ marginTop: "20px" }} />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <Avatar src={item.author.image} alt={item.author.name} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box>
                {format(new Date(), "dd MMM, yyyy")} &#x2022; 10min read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
