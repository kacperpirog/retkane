import React, { useState } from "react";
type Comment = {
  text: string;
  date: Date;
};
const comment = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");
  return <div>comment</div>;
};

export default comment;
