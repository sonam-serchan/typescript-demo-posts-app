import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import { fetchPosts } from "../helpers/fetchPosts";
import { Post } from "../types/post";

export default function Posts() {
  // type annotation for posts state using angle bracket (<>) in useState hook
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    setTimeout(() => {
      async function getPosts() {
        // data is inferred here as array of Post because of the return type specified in the fetchPosts function
        const data = await fetchPosts();
        setPosts(data);
      }

      getPosts();
    }, 1000);
  }, []);

  if (!posts?.length) {
    return <p>Posts are loading...</p>;
  }

  return (
    <section>
      <h2>These are the posts!</h2>
      <PostForm>
        <section>
          <span>A new post will be added</span>
        </section>
      </PostForm>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </section>
  );
}
