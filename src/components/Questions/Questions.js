import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizData = useLoaderData()
    const { data } = quizData;
    const { questions } = data;
    return (
        <div className='question-container w-3/4 m-auto'>
            {
                questions.map(quizQuestion => <Question key={quizQuestion.id} quizQuestion={quizQuestion}></Question>)
            }
        </div>
    );
};

export default Quiz;