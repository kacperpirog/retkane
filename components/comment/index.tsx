import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import Image from "next/image";
import styles from "./comment.module.css";

type Comment = {
  name: string;
  text: string;
  date: Date;
  image: string;
};

const imageOptions = [
  require("../../ass/icons/wired-outline-1574-spa-flower.gif"),
  require("../../ass/icons/wired-outline-27-globe.gif"),
  require("../../ass/icons/wired-outline-1832-sunflower.gif"),
];
const CommentWrapper = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newCommentName, setNewCommentName] = useState<string>("");
  const [newCommentText, setNewCommentText] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>(imageOptions[0]);

  const handleAddComment = () => {
    const newCommentObj: Comment = {
      name: newCommentName,
      text: newCommentText,
      date: new Date(),
      image: selectedImage,
    };

    setComments([newCommentObj, ...comments]);
    setNewCommentName("");
    setNewCommentText("");
  };

  const displayRecentComments = () => {
    return comments.slice(0, 3).map((comment, index) => (
      <div key={index} className={styles.comment}>
        <div className={styles.commentHeader}>
          {comment.image && (
            <Image
              className={styles.commentImage}
              src={comment.image}
              alt="Comment"
            />
          )}
          <h4>{comment.name}</h4>
        </div>
        <h5>{comment.text}</h5>
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
        value={newCommentName}
        placeholder="Imię"
        onChange={(e) => setNewCommentName(e.target.value)}
      />
      <input
        className={styles.inputField}
        type="text"
        value={newCommentText}
        placeholder="zostaw komentarz..."
        onChange={(e) => setNewCommentText(e.target.value)}
      />
      <div>
        {/* <select
          className={styles.selectImage}
          value={selectedImage}
          onChange={(e) => setSelectedImage(e.target.value)}
        >
          {imageOptions.map((image, index) => (
            <option key={index} value={image}>
              Wybierz obraz {index + 1}
            </option>
          ))}
        </select> */}
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
