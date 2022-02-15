import React from "react";
import ReactDom from "react-dom";

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
    alt=""
  />
);

const Author = () => <h4>Amelia Hepworth</h4>;

const Title = () => <h1>I Love You To The Moon an Back</h1>;

ReactDom.render(<Booklist />, document.getElementById("root"));
