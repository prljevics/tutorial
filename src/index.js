import React from "react";
import ReactDom from "react-dom";

import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  title: "I Love You To The Moon an Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/51vYL46df+L.jpg",
  title: "The Eye of the World: Book One of The Wheel of Time",
  author: "Robert Jordan",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book book={firstBook} />
      <Book book={secondBook} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img className="image" src={props.book.img} alt="" />
      <h1 className="title">{props.book.title}</h1>
      <h4 className="author">{props.book.author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
