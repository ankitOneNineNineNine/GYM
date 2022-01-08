import React from 'react';
import { NavLink } from 'react-router-dom';
import Book from '../components/Book/Book.component';


export default function Books() {
    const books = [{
        title: 'The Secrets of Weight Gain And Weight Loss (Iss.1)',
        image: "/Book 1.jpg",
        desc: 'This Book is all about the secrets behind weight gain and loss, some of the mistakes people make while doing so ,and the easy yet sustainable way of doing so.',
        issue: 1,
    }]
    return (
        <div className='flex'>
            {
                books.map((book, i) => (
                    <a className='center' key={i} href='https://www.amazon.com'>
                        <Book title={book.title} image={book.image} issue={book.issue} desc={book.desc} />
                    </a>
                ))
            }

        </div>
    )
}