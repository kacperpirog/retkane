import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
type Comment = {
  text: string;
  date: Date;
  rating: number;
  image: string;
};

const defaultImage = "/ass/comment/foto.png";
const CommentWrapper = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(0);
  const [newImage, setNewImage] = useState<File | null>(null);

  // useEffect(() => {
  //   const db = firebase.firestore();
  //   db.collection("comments")
  //     .orderBy("date", "desc")
  //     .onSnapshot((snapshot) => {
  //       const newComments: Comment[] = snapshot.docs.map(
  //         (doc) => doc.data() as Comment
  //       );
  //       setComments(newComments);
  //     });
  // }, []);

  // const handleAddComment = () => {
  //   const db = firebase.firestore();
  //   db.collection("comments").add({
  //     text: newComment,
  //     date: firebase.firestore.Timestamp.fromDate(new Date()),
  //     rating: newRating,
  //   });
  //   setNewComment("");
  //   setNewRating(0);
  // };  const [comments, setComments] = useState<Comment[]>([]);

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
    <div>
      <h2>Komentarze</h2>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <select
        value={newRating}
        onChange={(e) => setNewRating(Number(e.target.value))}
      >
        {[...Array(5)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1} {i + 1 > 1 ? "gwiazdki" : "gwiazdka"}
          </option>
        ))}
      </select>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewImage(e.target.files ? e.target.files[0] : null)}
      />
      <button onClick={handleAddComment}>Dodaj komentarz</button>
      {comments.slice(0, 3).map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <p>{comment.date.toLocaleString()}</p>
          <p>Ocena: {"⭐".repeat(comment.rating)}</p>
          <img src={comment.image} alt="Komentarz użytkownika" />
        </div>
      ))}
      {comments.length > 3 && (
        <details>
          <summary>Rozwiń</summary>
          {comments.slice(3).map((comment, index) => (
            <div key={index + 3}>
              <p>{comment.text}</p>
              <p>{comment.date.toLocaleString()}</p>
              <p>Ocena: {"⭐".repeat(comment.rating)}</p>
              <img src={comment.image} alt="Komentarz użytkownika" />
            </div>
          ))}
        </details>
      )}
    </div>
  );
};
export default CommentWrapper;
