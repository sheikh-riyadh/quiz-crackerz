import React, { useState } from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ quizQuestion, correctAnswerHandler }) => {


    /* Destructuring all questions */
    const [questions] = useState([quizQuestion])

    /* get question, answer option and id */
    const { id, question, options } = quizQuestion;

    const findAnswer = (e) => {
        /* Get value from user */
        const selectedAnswer = e.target.innerHTML;

        /* Find out answer */
        const answer = questions.find(answer => answer.id === id)


        /* Destructuring correct answer from answer */
        const { correctAnswer } = answer;
        /* const newCorrectAnswer = correctAnswer.replace(/\s+/g, ' ').trim(); */


        /* Check answer is correct or not */
        if (selectedAnswer === correctAnswer) {
            correctAnswerHandler(correctAnswer)
            toast.success('Answer is correct', { position: 'top-center', autoClose: 2000 })
        } else {
            toast.error('Wrong answer', { position: 'top-center', autoClose: 2000 })
        }
    }
    return (
        <div className='shadow-2xl rounded-xl p-10 text-center' onClick={findAnswer}>
            <p className='pb-8 font-bold text-xl hover:'>{question}</p>
            <div className='grid grid-cols-2 gap-5 items-center'>
                {
                    options.map((option, indexID) => <Options
                        key={indexID}
                        option={option}
                    ></Options>)
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default Question;