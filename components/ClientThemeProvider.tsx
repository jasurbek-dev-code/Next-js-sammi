"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "@/theme";
import createEmotionCache from "@/utils/createEmotionCache";
import "nprogress/nprogress.css";
const clientSideEmotionCache = createEmotionCache();
export default function ClientThemeProvider({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
