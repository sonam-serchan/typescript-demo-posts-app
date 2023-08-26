import { useEffect, useState } from "react";
import { Post } from "../types/post";
import { fetchPosts } from "../helpers/fetchPosts";

// defining return type of our custom hook
type UseFetchPostsReturn = {
  posts: Post[] | undefined;
};

// custom hook
export default function useFetchPosts(): UseFetchPostsReturn {
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

  return { posts };
}
