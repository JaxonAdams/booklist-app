import React, { Component } from 'react';

class BookList extends Component {
    state = {  } 
    constructor() {
        super();
        const bookList = [
            {
                id: '1',
                title: 'The Canterbury Tales',
                author: 'Geoffrey Chaucer'
            },
            {
                id: '2',
                title: 'Hyperion',
                author: 'Dan Simmons'
            }
        ]
    }

    render(props) { 
        return (
            <ul className='book-list'></ul>
        );
    }
}
 
export default BookList;