import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {format} from "date-fns"
import { BlogsType } from "@/interfaces/interfaces.interface";
interface ContentProps {
  blogs: BlogsType[]; 
}
export default function Content({ blogs }: ContentProps) {
  return (
    <Box width={{ xs: "100%", md: "70%" }} height={"200vh"}>
      {blogs.map((item) => (
        <Box
          key={item.id}
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
              src={item.image.url}
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
            <Avatar src={item.author.avatar.url} alt={item.author.name} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box>
                {format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022; 10min read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
