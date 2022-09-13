import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Moment from "react-moment";

const Post = ({ id, userName, avatar, mainImg, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => {
          setComments(snapshot.docs);
        }
      ),

    [db, id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
        setLikes(snapshot.docs);
      }),

    [db, id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
        userImage: session.user.image,
      });
    }
  };

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
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
            {hasLiked ? (
              <Icon
                icon="ant-design:heart-filled"
                onClick={likePost}
                className="btn text-red-500 hover:text-red-500"
              />
            ) : (
              <Icon
                onClick={likePost}
                className="btn hover:text-red-500"
                icon="akar-icons:heart"
              />
            )}
            <Icon className="btn" icon="eva:message-circle-outline" />
            <Icon className="btn" icon="ion:paper-plane-outline" />
          </div>
          <Icon className="btn" icon="lucide:bookmark-minus" />
        </div>
      )}

      {likes.length === 1 ? (
        <div className="ml-4 flex items-center space-x-2 ">
          <img
            className="h-8 rounded-full"
            src={likes[0].data().userImage}
            alt="img"
          />
          <span className="  font-gilSemi text-sm">
            Liked by {likes[0]?.data().username}
          </span>
        </div>
      ) : likes.length === 2 ? (
        <div className="ml-4 flex items-center space-x-2 ">
          <img
            className="h-8 rounded-full"
            src={likes[0].data().userImage}
            alt="img"
          />

          <span className="font-gilSemi text-sm">
            Liked by {likes[0]?.data().username} and 1 other
          </span>
        </div>
      ) : likes.length > 2 ? (
        <div className="ml-4 flex items-center space-x-2 ">
          <img
            className="h-8 rounded-full"
            src={likes[0].data().userImage}
            alt="img"
          />
          <span className="font-gilSemi text-sm">
            Liked by {likes[0]?.data().username} and {likes.length - 1} others{" "}
          </span>
        </div>
      ) : null}

      <p className="mt-4 truncate px-4 font-manrope text-sm font-medium">
        <span className="mr-1 font-gilBold text-lg">{userName} </span>
        {caption}
      </p>

      <span className="cursor-pointer px-4 font-gilSemi text-sm ">...More</span>

      {/* Displaying Comments */}
      {comments.length > 0 ? (
        <div className=" h-20 space-y-3 overflow-y-scroll px-6 py-2 scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className=" mt-2 flex items-center space-x-2 "
            >
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt="user-img"
              />
              <p className="flex-1 text-sm">
                <span className="font-gilBold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-gray-60 m-4">No Comments Yet</h1>
      )}

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
