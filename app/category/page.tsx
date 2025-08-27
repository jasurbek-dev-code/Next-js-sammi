import Categories from "@/components/categories/categories";
import { BlogsService } from "@/services/blog.service";

export default async function Page() {
  const categories = await BlogsService.getCategories();
  return <Categories categories={categories} />;
}
