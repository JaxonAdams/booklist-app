import './App.css';
import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import BookList from './components/BookList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div  className="container">
        <Header />
        <Form />
        <BookList />
      </div>
    </GlobalProvider>
  );
}

export default App;
