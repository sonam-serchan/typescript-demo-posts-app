import { Post } from "../types/post";
interface PostBody extends Omit<Post, "id" | "userId"> {}

export async function savePost(body: PostBody): Promise<{ id: number }> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
