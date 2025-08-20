import { Box,  Typography } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Typography>
        &copy; {new Date().getFullYear()} Sammi. All Rights Reserved
      </Typography>
      <Box
        sx={{display:"flex",alignItems:"center",gap:"15px"}}
      >
        <TelegramIcon sx={{cursor:"pointer"}} />
        <InstagramIcon sx={{cursor:"pointer"}} />
        <YouTubeIcon sx={{cursor:"pointer"}} />
      </Box>
      <div ></div>
    </Box>
  );
}
