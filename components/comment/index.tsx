import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import Image from "next/image";
import styles from "./comment.module.css";

type Comment = {
  text: string;
  date: Date;
  image: string;
};

const imageOptions = [
  "../../ass/icons/wired-outline-1574-spa-flower.gif",
  "../../ass/icons/wired-outline-27-globe.gif",
  "../../ass/icons/wired-outline-1832-sunflower.gif",
];
const CommentWrapper = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>(imageOptions[0]);

  const handleAddComment = () => {
    const newCommentObj: Comment = {
      text: newComment,
      date: new Date(),
      image: selectedImage,
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  const displayRecentComments = () => {
    return comments.slice(0, 3).map((comment, index) => (
      <div key={index} className={styles.comment}>
        <p>{comment.text}</p>
        <p>{comment.date.toLocaleString()}</p>
        {comment.image && (
          <img
            className={styles.commentImage}
            src={comment.image}
            alt="Comment"
          />
        )}
      </div>
    ));
  };
  return (
    <div className={styles.commentSection}>
      <div>
        <h2>What do they say about us</h2>
      </div>
      <input
        className={styles.inputField}
        type="text"
        value={newComment}
        placeholder="zostaw komentarz..."
        onChange={(e) => setNewComment(e.target.value)}
      />
      <div>
        {/* Dropdown for selecting an image */}
        <select
          className={styles.selectImage}
          value={selectedImage}
          onChange={(e) => setSelectedImage(e.target.value)}
        >
          {imageOptions.map((image, index) => (
            <option key={index} value={image}>
              Image {index + 1}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.commentButton} onClick={handleAddComment}>
        Dodaj komentarz
      </button>
      <div className={styles.comments}>{displayRecentComments()}</div>

      {/* {comments.length > 3 && (
        <details className={styles.details}>
          <summary>Rozwiń</summary>
          {comments.slice(3).map((comment, index) => (
            <div key={index + 3} className={styles.comment}>
              <p>{comment.text}</p>
              <p>{comment.date.toLocaleString()}</p>
              {comment.image && (
                <img
                  className={styles.commentImage}
                  src={comment.image}
                  alt="Selected"
                />
              )}
            </div>
          ))}
        </details>
      )} */}
    </div>
  );
};
export default CommentWrapper;
