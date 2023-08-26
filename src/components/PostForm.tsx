import { ReactNode, useState } from "react";
import { savePost } from "../helpers/savePost";

export default function PostForm({ children }: { children: ReactNode }) {
  // inference - string type is automatically inferred in title and body
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // giving ChangEvent type to event
  function handleSetTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  // giving FormEvent type to event
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = await savePost({ title, body });
    alert(data.id);
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginBottom: "30px",
      }}
      onSubmit={handleSubmit}
    >
      {children}
      <input
        value={title}
        placeholder="Enter title"
        onChange={handleSetTitle}
        style={{ padding: "10px" }}
      />
      <input
        value={body}
        placeholder="Enter Body"
        onChange={(e) => setBody(e.target.value)}
        style={{ padding: "10px" }}
      />
      <button type="submit">Save</button>
    </form>
  );
}
