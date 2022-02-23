import './App.css';
import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import BookList from './components/BookList'

function App() {
  const initialBookList = [
    {
        id: 1,
        title: "The Canterbury Tales",
        author: "Geoffrey Chaucer"
    }, 
    {
        id: 2,
        title: "Hyperion",
        author: "Dan Simmons"
    }
  ]

  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');

  const [bookList, setBookList] = React.useState(initialBookList);

  const titleInputHandler = function(event) {
    setTitle(event.target.value);
  }

  const authorInputHandler = function(event) {
    setAuthor(event.target.value);
  }

  const submitHandler = function() {
    const newList = bookList.concat();
    setBookList(newList);
  }

  return (
    <div className="container">
      <Header />
      <Form submitHandler={submitHandler} titleInputHandler={titleInputHandler} authorInputHandler={authorInputHandler}/>
      <BookList initialList={initialBookList} newList={bookList}/>
    </div>
  );
}

export default App;
