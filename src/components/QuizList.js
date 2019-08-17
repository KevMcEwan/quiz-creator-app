import React from 'react';
import Quiz from './Quiz';
import { BrowserRouter as Router, Route } from "react-router-dom";


const QuizList = (props) => {
    const list = props.quizArray.map((quiz) => {
        
        function handleClick(event) {
            event.preventDefault();
            const newQuiz = event.target.value;
            console.log(event.target);
            props.handleCurrentQuizChange(newQuiz);
        };
       
        return <li>
                <button onClick={handleClick} value={quiz.id}>
                    Quiz Name: {quiz.quizName}
                    Number of Questions: {quiz.questionArray.length}
                </button>
        </li>
    })
 
        if (props.currentQuiz === null){
        return (
            <ul className="quiz-list">
                {list}
            </ul>
        )
        } else {
            return (
                <Quiz 
                quiz={props.currentQuiz}
                />
            )
        }
}


export default QuizList;