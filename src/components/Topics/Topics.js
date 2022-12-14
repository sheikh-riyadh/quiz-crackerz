import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { id, name, logo } = topic;
    console.log(name)

    /* Create navigate for passing dynamic topics questions */
    const navigate = useNavigate()

    /* Topic question handler */
    const topicQuestionHandler = (quizId) => {
        navigate(`/quiz/${quizId}`)
    }
    return (
        <div className='shadow-xl p-10 rounded-lg text-center'>
            <img className='w-36 bg-[#222] m-auto rounded-xl' src={logo} alt="TopicImage" />
            <div className='flex flex-col justify-between items-center md:flex-row lg:flex-col xl:flex-row pt-5 text-[#222] font-bold text-lg'>
                <h4>{name}</h4>
                <button onClick={() => topicQuestionHandler(id)} className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded">
                    Let's try
                </button>
            </div>
        </div>
    );
};

export default Topics;