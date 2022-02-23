import React, { Component } from 'react';
import Book from './Book';

function BookList(props) {
    
    const initialList = props.initialList
    const newList = props.newList

    return ( 
        <ul className='book-list'>
            <Book id={initialList[0].id} title={initialList[0].title} author={initialList[0].author} />
            <Book id={initialList[1].id} title={initialList[1].title} author={initialList[1].author} />
            {newList.map((book) => (
                <li  className='book' key={book.id}>{book.title}, by {book.author}</li>
            ))}
        </ul>
    );
}

export default BookList;