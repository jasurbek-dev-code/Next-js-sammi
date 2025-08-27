"use client";

import { Category } from "@/interfaces/interfaces.interface";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Categories({ categories }: { categories: Category[] }) {
  const router = useRouter();

  return (
    <Box
      width={{ xs: "100%", md: "80%" }}
      mx="auto"
      marginTop="10vh"
      height={{ xs: "30vh", md: "50vh" }}
      sx={{
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "20px",
      }}
    >
      <Typography variant="h4" fontFamily="cursive">
        All Categories
      </Typography>

      <ButtonGroup variant="contained" aria-label="Basic button group">
        {categories.map((item) => (
          <Button
            key={item.id}
            onClick={() => router.push(`/category/${item.slug}`)}
          >
            # {item.label}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
