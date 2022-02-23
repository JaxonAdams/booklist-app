import React, { Component } from 'react';

function Book(props) {
    return ( 
        <li className='book' key={props.key}>{props.title}, by {props.author}</li>
    );
}

export default Book;