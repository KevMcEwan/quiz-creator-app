import React, { Component } from 'react';

const QuizList = (props) => {
    
    function handleClick(event){
        event.preventDefault();
        const currentQuiz = event.target.value;
        props.handleCurrentQuizChange(currentQuiz);   
    };

    const list = props.quizArray.map((quiz) => {
        return <li>
            <div className="quizListItem">
                <button onClick={handleClick}>
                    <div>Quiz Name: {quiz.quizName}</div>
                    <div>Number of Questions: {quiz.questionArray.length}</div>
                </button>
            </div>
        </li>
    })

    return (
        
            <ul className="quiz-list">
                {list}
            </ul>
        
    )
}


export default QuizList;