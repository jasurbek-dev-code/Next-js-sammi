import { navItems } from "@/config/constants";
import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
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
export default function Sidebar() {
  return (
    <Box width={{xs:"100%",md:"30%"}} >
      <Box position={'sticky'} top={"100px"} sx={{transition:"all .3 ease"}}>
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
          <Typography variant="h5">Category</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {data.map((item) => (
              <Box key={item.title} marginTop={"20px"}>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <Typography variant="body1">{item.title}</Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        marginTop: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Avatar src={item.author.image} alt={item.author.name} />
                      <Box>
                        <Typography variant="body2">
                          {item.author.name}
                        </Typography>
                        <Box sx={{ opacity: ".7", fontSize: "14px" }}>
                          {format(new Date(), "dd MMM, yyyy")}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Divider sx={{ marginTop: "20px" }} />
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          padding={"20px"}
          border={"1px solid gray"}
          borderRadius={"8px"}
          marginTop={"20px"}
        >
          <Typography variant="h5">Category</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {navItems.map((item) => (
              <Fragment key={item.route}>
                <Button
                  fullWidth
                  sx={{ justifyContent: "flex-start", height: "50px" }}
                >
                  {item.label}
                </Button>
                <Divider />
              </Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
