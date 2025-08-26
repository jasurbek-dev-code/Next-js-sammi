export interface BlogsType {
  excerpt: string;
  id: string;
  createdAt: string;
  description: {
    text: string;
  };
  image: {
    id: string;
    url: string;
  };
  author: {
    id: string;
    name: string;
    avatar: {
      id: string;
      url: string;
    };
  };
  category: {
    id: string;
    slug: string;
    label: string;
  };
  title: string;
  slug: string;
}
export type LatestBlog = Omit<BlogsType, "category" | "excerpt">;
export type Category = BlogsType["category"];
