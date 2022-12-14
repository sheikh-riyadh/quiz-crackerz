import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {

    const [correctAnswers, setCorrectAnswers] = useState([])

    console.log(correctAnswers)


    const correctAnswerHandler = (answer) => {
        const newCorrectAnswers = [...correctAnswers, answer]
        /* Checking if answer already exisit or not */
        if (correctAnswers.includes(answer)) {
            return
        } else {

            setCorrectAnswers(newCorrectAnswers)
        }
    }
    const quizData = useLoaderData()
    const { data } = quizData;
    const { questions } = data;
    return (
        <div className='grid grid-cols-1 xl:grid-cols-6 mt-20'>
            <div className='col-span-4'>
                {
                    questions.map(quizQuestion => <Question key={quizQuestion.id} quizQuestion={quizQuestion}
                        correctAnswerHandler={correctAnswerHandler}

                    ></Question>)
                }
            </div>
            <div className='text-center col-span-2'>
                <div className='sticky top-5'>
                    <h3 className='text-2xl font-bold pb-5'>Correct Answers</h3>
                    {
                        correctAnswers.map((correctAnswer, indexID) => <h3 className='text-xl' key={indexID}>{correctAnswer}</h3>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;