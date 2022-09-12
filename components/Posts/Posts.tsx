import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import { db } from "../../firebase";
import Post from "./Post";

const Posts = () => {


  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),

    [db]
  );

  console.log(posts[0]?.data());
  
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          avatar={post.data().profileImg}
          userName={post.data().username}
          caption={post.data().caption}
          mainImg={post.data().image}
        />
      ))}
    </div>
  );
};

export default Posts;
