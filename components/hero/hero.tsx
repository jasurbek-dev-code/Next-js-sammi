"use client";

import { Avatar, Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { format } from "date-fns";
import { BlogsType } from "@/interfaces/interfaces.interface";
import { estimatedTimeToRead } from "@/utils/time";
export interface Author {
  name: string;
  image: string;
}

export interface Article {
  image: string;
  title: string;
  excerpt: string;
  author: Author;
}


interface ContentProps {
  blogs: BlogsType[]; 
}
export default function Hero({ blogs }: ContentProps) {
  return (
    <Box width={"100%"} height={"70vh"}>
      <Carousel
        responsive={{
          mobile: {
            breakpoint: { max: 4000, min: 0 },
            items: 1,
          },
        }}
      >
        {blogs.map((item) => (
          <Box key={item.id}>
            <Box sx={{ position: "relative", width: "100%", height: "70vh" }}>
              <Image
                src={item.image.url}
                alt={item.title}
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,.6)",
                }}
              />
              <Box
                width={{ xs: "100%", md: "70%" }}
                position={"relative"}
                color={"white"}
                sx={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  paddingLeft: { xs: "10px", md: "50px" },
                }}
              >
                <Typography sx={{ fontSize: { xs: "30px", md: "50px" } }}>
                  {item.title}
                </Typography>
                <Typography
                  color="gray"
                  sx={{ fontSize: { xs: "20px", md: "25px" } }}
                >
                  {item.excerpt}
                </Typography>
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
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
