import React, { Component } from 'react';

class Form extends Component {
    state = {  } 
    render() { 
        return (
            <form className='form'>
                <div className='input-container'>
                    <input type='text' placeholder='Book Title' className='input-title'></input>
                    <input type='text' placeholder='Author' className='input-author'></input>
                </div>
                <button className='submit-btn'>Submit</button>
            </form>
        );
    }
}
 
export default Form;