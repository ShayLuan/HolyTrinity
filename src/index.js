import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/71UX57RpGOL._SY342_.jpg"
      alt="Book Cover"
    />
  );
};

const Title = () => {
  return <h2>Public Speaking How To Speak Effectively Without Fear</h2>;
};

const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
    Derek Borthwick
  </h4>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
