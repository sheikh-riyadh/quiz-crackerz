import React, { useState } from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Question = ({ quizQuestion, correctAnswerHandler }) => {

    const isClicked = [];

    /* Destructuring all questions */
    const [questions] = useState([quizQuestion])

    /* get question, answer option and id */
    const { id, question, options } = quizQuestion;

    const findAnswer = (e) => {
        /* Get value from user */
        const selectedAnswer = e.target.innerHTML;
        const newSelectedAnswer = selectedAnswer.replace(/\s+/g, ' ').trim();

        /* Find out answer */
        const answer = questions.find(answer => answer.id === id)


        /* Destructuring correct answer from answer */
        const { correctAnswer } = answer;
        const newCorrectAnswer = correctAnswer.replace(/\s+/g, ' ').trim();


        /* Check answer is correct or not */
        if (newSelectedAnswer === newCorrectAnswer) {

            /* Check answer is click or not */
            if (isClicked.includes(newSelectedAnswer)) {
                console.log('already clicked')
                return;
            }
            else {
                console.log('not yet')
                isClicked.push(newSelectedAnswer)
                correctAnswerHandler(correctAnswer)
                toast.success('Answer is correct', { position: 'top-center', autoClose: 1500 })
            }

        }
        else if (isClicked.includes(newSelectedAnswer)) {
            return;
        }
        else {
            isClicked.push(newSelectedAnswer)
            toast.error('Wrong answer', { position: 'top-center', autoClose: 1500 })
        }
    }
    return (
        <div className='shadow-2xl rounded-xl p-10 text-center'>
            <p className='pb-8 font-bold text-xl hover:'>{question}</p>
            <div className='grid grid-cols-2 gap-5 items-center'>
                {
                    options.map((option, indexID) => <Options
                        key={indexID}
                        option={option}
                        findAnswer={findAnswer}
                    ></Options>)
                }
                <ToastContainer />
            </div>
        </div>
    );
};

export default Question;