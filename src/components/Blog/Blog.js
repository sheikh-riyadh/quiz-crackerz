import React from 'react';

const Blog = ({ blog }) => {
    return (
        <div className='shadow-lg m-12 p-5 md:p-10 
         rounded-xl'>
            <h1 className='text-xl font-bold pb-3'>{blog.question}</h1>
            <p>{blog.answer}</p>
        </div>
    );
};

export default Blog;