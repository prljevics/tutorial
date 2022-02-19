const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("Hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img className="image" src={img} alt="" />
      <h1 className="title">{title}</h1>
      <h4 className="author">{author}</h4>
      <button type="button" onClick={clickHandler}>
        Buy
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

export default Book;
