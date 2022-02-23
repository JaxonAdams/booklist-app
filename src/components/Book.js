import React, { Component, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Book({ book }) {
    const { deleteBook } = useContext(GlobalContext);

    return ( 
        <li className='book'>{book.title}, by {book.author} <br/> <button className='delete-btn' onClick={() => {deleteBook(book.id)}} >Delete Item From List</button></li>
    );
}

export default Book;