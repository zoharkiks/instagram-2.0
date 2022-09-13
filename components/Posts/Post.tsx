import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Post = ({ id, userName, avatar, mainImg, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts",id,"comments"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),

    [db]
  );

  console.log(comments);
  

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");
   


    await addDoc(collection(db,"posts",id,"comments"),{
      comment : commentToSend,
      username:session.user.username,
      userImage:session.user.image,
      timestamp:serverTimestamp()
    })

    
  };

  return (
    <div className="mt-10 rounded-2xl  bg-white pb-4 shadow-xl ">
      <div className="flex items-center justify-between space-x-4 p-4 ">
        <img className="h-12 w-12 rounded-full" src={avatar} alt="profilePic" />
        <p className="flex-1 font-gilSemi">{userName}</p>
        <Icon className="btn h-6 w-6" icon="bi:three-dots" />
      </div>

      <img src={mainImg} className="w-full object-cover" alt="main-image" />

      {session && (
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Icon className="btn" icon="akar-icons:heart" />
            <Icon className="btn" icon="eva:message-circle-outline" />
            <Icon className="btn" icon="ion:paper-plane-outline" />
          </div>
          <Icon className="btn" icon="lucide:bookmark-minus" />
        </div>
      )}

      <p className="mt-4 truncate px-4 font-manrope text-sm font-medium">
        <span className="mr-1 font-gilBold text-lg">{userName} </span>
        {caption}
      </p>

      <span className="cursor-pointer px-4 font-gilSemi text-sm ">
        Show More
      </span>

      {session && (
        <form className="flex items-center px-4 pt-4" action="">
          <Icon className="text-gray-400" icon="fluent:emoji-32-regular" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          
            placeholder="Add Comment"
            className="flex-1 border-none font-manrope text-sm font-medium placeholder-gray-400 outline-none  focus:ring-0  "
          />
          <button
            type="submit"
            disabled={!comment?.trim()}
            className=" textGradient font-gilBold"
            onClick={sendComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
