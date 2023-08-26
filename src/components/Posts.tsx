import PostCard from "./PostCard";
import PostForm from "./PostForm";
import useFetchPosts from "../hooks/useFetchPosts";

export default function Posts() {
  // custom hook to get data
  const { posts } = useFetchPosts();

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
