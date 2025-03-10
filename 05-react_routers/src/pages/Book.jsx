import React from "react";
import { useParams } from "react-router-dom";
const Book = () => {
  const { bookId } = useParams();
  return (
    <div>
      <h1>Book {bookId}</h1>
    </div>
  );
};

export default Book;
