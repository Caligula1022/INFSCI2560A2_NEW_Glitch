import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const books = [
  {
    title: '11111',
    text: 'qqqqqq',
  },
  {
    title: '22222',
    text: 'wwwwww',
  },
];

function BookList() {
  return (
    <section className='book'>
      {books.map((book) => {
        const { title, text } = book;
        // console.log(book);
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

function Book(props) {
  console.log(props);
  const { title, text } = props.book;
  return (
    <article>
      <h1>{title}</h1>
      <h4>{text}</h4>
    </article>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  document.getElementById('root')
);