import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


const QuizList = (props) => {
    const list = props.quizArray.map((quiz) => {
        
        function handleClick(event) {
            event.preventDefault();
            const newQuiz = event.target.value;
            console.log(event.target);
            props.handleCurrentQuizChange(newQuiz);
        };

        const quizRoute = "quiz:" + quiz.id;
       
        return <li>
                <button onClick={handleClick} value={quiz.id}>
                    Quiz Name: {quiz.quizName}
                    Number of Questions: {quiz.questionArray.length}
                </button>
        </li>
    })
 
        return (
            <ul className="quiz-list">
                {list}
            </ul>
        )
}


export default QuizList;