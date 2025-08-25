import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React, { Fragment } from "react";
import { format } from "date-fns";
import { Category, LatestBlog } from "@/interfaces/interfaces.interface";

interface SidebarProps {
  blogs: LatestBlog[];
  categories: Category[];
}

export default function Sidebar({ blogs, categories }: SidebarProps) {
  return (
    <Box width={{ xs: "100%", md: "30%" }}>
      <Box position={"sticky"} top={"100px"} sx={{ transition: "all .3 ease" }}>
        <Box padding={"20px"} border={"1px solid gray"} borderRadius={"8px"}>
          <Typography variant="h5">Category</Typography>
          <Box
            sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
          >
            {blogs.map((item) => (
              <Box key={item.id} marginTop={"20px"}>
                <Box
                  sx={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Image
                    src={item.image.url}
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
                      <Avatar
                        src={item.author.avatar.url}
                        alt={item.author.name}
                      />
                      <Box>
                        <Typography variant="body2">
                          {item.author.name}
                        </Typography>
                        <Box sx={{ opacity: ".7", fontSize: "14px" }}>
                          {format(new Date(item.createdAt), "dd MMM, yyyy")}
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
            {categories.map((item) => (
              <Fragment key={item.id}>
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
