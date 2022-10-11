import React from 'react';

const Options = ({ option }) => {
    return (
        <div className='border-2 border-teal-400 rounded-xl p-10'>
            <p className='p-5 cursor-pointer'>{option}</p>
        </div>
    );
};

export default Options;