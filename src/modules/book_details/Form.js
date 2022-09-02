import { useState } from "react";
import "./AddBook.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [subject, setSubject] = useState("");
  const [bookId, setBookId] = useState("");
  const [bookShelf, setBookShelf] = useState("");
  const AddBookHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(author);
    console.log(subject);
    console.log(bookId);
    console.log(bookShelf);
    setTitle("");
    setAuthor("");
    setSubject("");
    setBookId("");
    setBookShelf("");
  };
  return (
    <form className="login" onSubmit={AddBookHandler}>
      <div className="login__field">
        <input
          type="text"
          className="login__input"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="login__field">
        <input
          type="text"
          className="login__input"
          placeholder="Author"
          value={author}
          required
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div className="login__field">
        <input
          type="text"
          className="login__input"
          placeholder="Subject"
          value={subject}
          required
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
      </div>
      <div className="login__field">
        <input
          type="text"
          className="login__input"
          placeholder="BookID"
          value={bookId}
          required
          onChange={(e) => {
            setBookId(e.target.value);
          }}
        />
      </div>
      <div className="login__field">
        <input
          type="text"
          className="login__input"
          placeholder="BookShelf"
          value={bookShelf}
          required
          onChange={(e) => {
            setBookShelf(e.target.value);
          }}
        />
      </div>

      <button className="button login__submit">
        <span className="button__text">Add Book's Details</span>
      </button>
    </form>
  );
};

export default Form;
