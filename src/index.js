import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  author: 'Bunnie Xo',
  title: 'Stripped Down: Unfiltered and Unapologetic',
  img: 'https://m.media-amazon.com/images/I/71DzlIl-gML._SL1500_.jpg',
};

const secondBook = {
  author: 'Virginia Evans',
  title: 'The Correspondent',
  img: 'https://m.media-amazon.com/images/I/81PndgdGCXL._SL1500_.jpg',
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
