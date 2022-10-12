import React, { useState } from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'


const Question = ({ quizQuestion, correctAnswerHandler }) => {

    const isClicked = [];

    /* Destructuring all questions */
    const [questions] = useState([quizQuestion])

    /* get question, answer option and id */
    const { correctAnswer, id, question, options } = quizQuestion;

    const answerHandler = (clicked) => {
        toast.success(`Correct answer: ${correctAnswer}`, { position: 'top-center', autoClose: 7000 })
    }

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
                return;
            }
            else {
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
            console.log(newSelectedAnswer)
        }
    }
    return (
        <div className='shadow-2xl rounded-xl mb-12 p-3 md:p-7 lx:p-10 text-center'>
            <div className='flex flex-row justify-between'>
                <p className='pb-8 font-bold text-xl hover:'>{question}</p>
                <EyeIcon onClick={() => answerHandler(false)} className="h-6 w-6 text-blue-500 cursor-pointer" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 items-center'>
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