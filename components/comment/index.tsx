import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import Image from "next/image";
import styles from "./comment.module.css";

type Comment = {
  text: string;
  date: Date;
  rating: number;
  image: string;
};

const defaultImage = "../../ass/comment/foto.png";
const CommentWrapper = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(0);
  const [newImage, setNewImage] = useState<File | null>(null);

  const handleAddComment = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setComments([
        {
          text: newComment,
          date: new Date(),
          rating: newRating,
          image: newImage ? (reader.result as string) : defaultImage,
        },
        ...comments,
      ]);
    };
    if (newImage) {
      reader.readAsDataURL(newImage);
    }
    setNewComment("");
    setNewRating(0);
    setNewImage(null);
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
        onChange={(e) => setNewComment(e.target.value)}
      />
      <div>
        <select
          className={styles.selectRating}
          value={newRating}
          onChange={(e) => setNewRating(Number(e.target.value))}
        >
          {[...Array(5)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} {i + 1 > 1 ? "gwiazdki" : "gwiazdka"}
            </option>
          ))}
        </select>
      </div>
      <input
        className={styles.uploadButton}
        type="file"
        accept="image/*"
        onChange={(e) => setNewImage(e.target.files ? e.target.files[0] : null)}
      />
      <button className={styles.commentButton} onClick={handleAddComment}>
        Dodaj komentarz
      </button>
      <div className={styles.comments}>
        {comments.slice(0, 3).map((comment, index) => (
          <div key={index} className={styles.comment}>
            <p>{comment.text}</p>
            <p>{comment.date.toLocaleString()}</p>
            <p className={styles.commentRatingDisplay}>
              Ocena: {"⭐".repeat(comment.rating)}
            </p>
            <img
              className={styles.commentImage}
              src={comment.image}
              alt="użytkownik"
            />
          </div>
        ))}
      </div>
      {comments.length > 3 && (
        <details className={styles.details}>
          <summary>Rozwiń</summary>
          {comments.slice(3).map((comment, index) => (
            <div key={index + 3} className={styles.comment}>
              <p>{comment.text}</p>
              <p>{comment.date.toLocaleString()}</p>
              <p className={styles.commentRatingDisplay}>
                Ocena: {"⭐".repeat(comment.rating)}
              </p>
              <img
                className={styles.commentImage}
                src={comment.image}
                alt="użytkownik"
              />
            </div>
          ))}
        </details>
      )}
    </div>
  );
};

export default CommentWrapper;
