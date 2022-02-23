import React, { Component, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Form() {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const { addBook } = useContext(GlobalContext);

    const onSubmit = function(event) {
        event.preventDefault();

        const newBook = {
            id: Math.floor(Math.random() * 100000000),
            title,
            author
        }

        addBook(newBook);
    }

    return ( 
        <form className='form' onSubmit={onSubmit}>
            <div className='input-container'>
                <input type='text' value={title} placeholder='Book Title' onChange={(e) => {setTitle(e.target.value)}} className='input-title'></input>
                <input type='text' value={author} placeholder='Author' onChange={(e) => {setAuthor(e.target.value)}} className='input-author'></input>
            </div>
            <button type='submit' className='submit-btn'>Submit</button>
        </form>
    );
}

export default Form;