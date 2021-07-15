import React, { useContext, useEffect } from "react";
import { Store } from "./StoreProvider";

const PostList = () => {
  const data = useContext(Store);

  const { postList, setPostList, setPostId, postIds } = data;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => setPostList(result));
  }, []);

  if (!postList.length) {
    return <div>Post's Not Found!</div>;
  }

  return (
    <div>
      <ul>
        {postList.map((post) => {
          return (
            <li
              key={post.id}
              onClick={() => setPostId([...postIds, post.id])}
              className="postItem"
            >
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
