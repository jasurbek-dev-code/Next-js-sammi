import {
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
};
