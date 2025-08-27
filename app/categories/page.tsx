import Categories from "@/components/categories/categories";
import { BlogsService } from "@/services/blog.service";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Categories",
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
export default async function Page() {
  const categories = await BlogsService.getCategories();
  return <Categories categories={categories} />;
}
