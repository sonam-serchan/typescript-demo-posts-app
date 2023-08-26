import { Post } from "../types/post";

// return type of Promise of array Post
export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  // gving type to data as array Post
  const data: Post[] = await response.json();
  return data;
}
