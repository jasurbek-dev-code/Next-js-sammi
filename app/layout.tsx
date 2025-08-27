import { ReactNode } from "react";
import { Metadata } from "next";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import { Footer, Navbar } from "@/components";
import { Box } from "@mui/material";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sammi blogs",
  description: "All blogs about IT",
  keywords: ["IT", "programming", "frontend", "nextjs"],
  authors: [
    { name: "Samar Badriddinov", url: "https://github.com/jasurbek-dev-code" },
  ],
  icons: {
    icon: "/vercel.svg",
    shortcut: "/vercel.svg",
    apple: "/vercel.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ClientThemeProvider >
          <Box minHeight={"90vh"}>{children}</Box>
        </ClientThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
