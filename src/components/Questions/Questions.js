import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData = useLoaderData()
    const { data } = quizData;
    const { questions } = data;
    return (
        <div className='grid grid-cols-6 mt-20'>
            <div className='col-span-4'>
                {
                    questions.map(quizQuestion => <Question key={quizQuestion.id} quizQuestion={quizQuestion}></Question>)
                }
            </div>
            <div className='text-center col-span-2'>
                <h3>Correct anwser</h3>
            </div>
        </div>
    );
};

export default Quiz;