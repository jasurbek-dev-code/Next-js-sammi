
import { ReactNode } from "react";
import { Metadata } from "next";
import ClientThemeProvider from "@/components/ClientThemeProvider";
import { Footer, Navbar } from "@/components";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "My Project",
  description: "This is my custom description",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ClientThemeProvider>
          <Box minHeight={"90vh"}>{children}</Box>
        </ClientThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
