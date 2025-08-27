import {
  Blog,
  BlogsType,
  Category,
  LatestBlog,
} from "@/interfaces/interfaces.interface";
import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;
export const BlogsService = {
  async getAllBlogs() {
    const query = gql`
      query getBlogs {
        blogs {
          excerpt
          id
          createdAt
          description {
            text
          }
          image {
            id
            url
          }
          author {
            id
            name
            avatar {
              id
              url
            }
          }
          category {
            id
            slug
            label
          }
          title
          slug
        }
      }
    `;
    const result = await request<{ blogs: BlogsType[] }>(graphqlAPI, query);
    return result.blogs;
  },
  async getLatestBlogs() {
    const query = gql`
      query getLatestBlogs {
        blogs(last: 2) {
          id
          createdAt
          description {
            text
          }
          image {
            id
            url
          }
          author {
            id
            name
            avatar {
              id
              url
            }
          }
          title
          slug
        }
      }
    `;
    const result = await request<{
      blogs: LatestBlog[];
    }>(graphqlAPI, query);
    return result.blogs;
  },
  async getCategories() {
    const query = gql`
      query getCategory {
        categories {
          id
          slug
          label
        }
      }
    `;
    const result = await request<{
      categories: Category[];
    }>(graphqlAPI, query);
    return result.categories;
  },
  async getDetailedBlog(slug: string) {
    const query = gql`
      query getDetailedBlog($slug: String!) {
        blog(where: { slug: $slug }) {
          excerpt
          id
          createdAt
          description {
            text
            html
          }
          image {
            id
            url
          }
          author {
            id
            name
            avatar {
              id
              url
            }
          }
          category {
            id
            slug
            label
          }
          title
          slug
        }
      }
    `;
    const result = await request<{
      blog: Blog;
    }>(graphqlAPI, query, { slug });
    return result.blog;
  },
  async getCategorizedBlog(slug: string) {
    const query = gql`
      query getCategorizedBlog($slug: String!) {
        blogs(where: { category: { slug: $slug } }) {
          excerpt
          id
          createdAt
          description {
            text
            html
          }
          image {
            id
            url
          }
          author {
            id
            name
            avatar {
              id
              url
            }
          }
          category {
            id
            slug
            label
          }
          title
          slug
        }
      }
    `;
    const result = await request<{
      blogs: Blog[];
    }>(graphqlAPI, query, { slug });
    return result.blogs;
  },
};
