import "./AddBook.css";

import Background from "./Background";
import Form from "./Form";

const AddBook = () => {
  return (
    <div className="book-container">
      <div className="screen">
        <div className="screen__content">
          <h1 className="heading">New Book Entry</h1>
          <Form />
        </div>
        <div className="screen__background">
          <Background />
        </div>
      </div>
    </div>
  );
};

export default AddBook;
