import React from 'react';

const Topics = ({ topic }) => {
    const { name, logo } = topic
    console.log(topic)
    return (
        <div className='shadow-xl p-10 rounded-lg text-center'>
            <img className='w-36 bg-[#222] m-auto rounded-xl' src={logo} alt="TopicImage" />
            <div className='flex justify-between items-center pt-5 text-[#222] font-bold text-lg'>
                <h4>{name}</h4>
                <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
        </div>
    );
};

export default Topics;