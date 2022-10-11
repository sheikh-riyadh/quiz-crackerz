import React, { useState } from 'react';
import Options from '../Options/Options';


const Question = ({ quizQuestion }) => {
    const { id, question, options } = quizQuestion;

    const [questions] = useState([quizQuestion])

    const findAnswer = (e) => {
        const selectedAnswer = e.target.innerHTML;

        const answer = questions.find(answer => answer.id === id)

        const { correctAnswer } = answer;
        /* const newCorrectAnswer = correctAnswer.replace(/\s+/g, ' ').trim(); */

        console.log(answer)
        if (selectedAnswer === correctAnswer) {
            alert('Correct answer')
        } else {
            alert('Wrong answer')
        }
    }
    return (
        <div className='mt-20 shadow-2xl rounded-xl p-10 text-center' onClick={findAnswer}>
            <p className='pb-8'>{question}</p>
            <div className='grid grid-cols-2 gap-5 items-center'>
                {
                    options.map((option, indexID) => <Options
                        key={indexID}
                        option={option}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Question;