import React from "react";
import { images } from "../../constants";
import Post from "./Post";

const Posts = () => {
  const posts = [
    {
      id: "123",
      userName: "zoharkiks",
      avatar: images.profile,
      mainImg: images.test,
      caption: "Lets build insta and rock the world like crazy Lets build insta and rock the world like crazy Lets build insta and rock the world like crazyLets build insta and rock the world like crazy !!!!!",
    },
    {
      id: "123",
      userName: "zoharkiks",
      avatar: images.profile,
      mainImg: images.test,
      caption: "Lets build insta",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          avatar={post.avatar}
          userName={post.userName}
          caption={post.caption}
          mainImg={post.mainImg}
        />
      ))}
    </div>
  );
};

export default Posts;
