import React from 'react';

const Options = ({ option, findAnswer }) => {
    return (
        <div className='border-2 border-teal-400 rounded-xl p-8 hover:bg-teal-400 hover:text-white hover:animate-pulse'>
            <p className='p-5 text-lg cursor-pointer' onClick={findAnswer}>{option}</p>
        </div>
    );
};

export default Options;