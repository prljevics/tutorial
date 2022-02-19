import React from "react";
import ReactDom from "react-dom";

import "./index.css";
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You To The Moon an Back",
    author: "Amelia Hepworth",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51vYL46df+L.jpg",
    title: "The Eye of the World: Book One of The Wheel of Time",
    author: "Robert Jordan",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/91HSa7sG8tL._AC_UY218_.jpg",
    title:
      "A Game of Thrones / A Clash of Kings / A Storm of Swords / A Feast of Crows / A Dance with Dragons",
    author: "J.R.R. Martin",
  },
];
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img className="image" src={img} alt="" />
      <h1 className="title">{title}</h1>
      <h4 className="author">{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
