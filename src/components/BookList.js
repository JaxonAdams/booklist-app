import React, { Component, useContext } from 'react';
import Book from './Book';
import { GlobalContext } from '../context/GlobalState';

function BookList() {
    const {books} = useContext(GlobalContext);

    return ( 
        <ul className='book-list'>
            {books.map(book => (
                <Book book={book} key={book.id} />
            ))}
        </ul>
    );
}

export default BookList;