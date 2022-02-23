import React, { Component } from 'react';

function Form(props) {

    return ( 
        <form className='form'>
            <div className='input-container'>
                <input type='text' placeholder='Book Title' className='input-title' onChange={props.titleInputHandler}></input>
                <input type='text' placeholder='Author' className='input-author' onChange={props.authorInputHandler}></input>
            </div>
            <button className='submit-btn' onClick={props.submitHandler}>Submit</button>
        </form>
    );
}

export default Form;