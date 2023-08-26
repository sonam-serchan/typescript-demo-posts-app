import { Post } from "../types/post";

// Utility types - using Pick to remove defining all object key/types again
type PostCardProps = Pick<Post, "id" | "title" | "body">;

// Prop types usage PostCardProps to define what properties do this component PostCard expects
export default function PostCard({ id, title, body }: PostCardProps) {
  return (
    <div
      key={id}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{title}</h3>
      <span>{body}</span>
    </div>
  );
}
