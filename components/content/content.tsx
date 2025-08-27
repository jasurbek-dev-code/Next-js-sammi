"use client"
import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import {format} from "date-fns"
import {  BlogsType } from "@/interfaces/interfaces.interface";
import { estimatedTimeToRead } from "@/utils/time";
import { useRouter } from "next/navigation";
interface ContentProps {
  blogs: BlogsType[]; 
}
export default function Content({ blogs }: ContentProps) {
  const router=useRouter()
  return (
    <Box width={{ xs: "100%", md: "70%" }} >
      {blogs.map((item) => (
        <Box
          key={item.id}
          sx={{
            backgroundColor: "rgba(0,0,0,.5)",
            padding: "20px",
            marginTop: "20px",
            boxShadow: "0px 8px 16px rgba(255,255,255,.1)",
            borderRadius: "8px",
            cursor:"pointer"
          }}
          onClick={()=>router.push(`/blogs/${item.slug}`)}
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
              style={{ objectFit: "cover",borderRadius:"10px" }}
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
                {format(new Date(item.createdAt), "dd MMM, yyyy")} &#x2022; {estimatedTimeToRead(item.description.text)}min read
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
