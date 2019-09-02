import React from 'react';

const AutoQuizButton = (props) => {

    const quizName = props.quizName;

    function onClick(event){
        event.preventDefault();
        const quiz = event.target.value;
        console.log("CurrentQuiz is: ", quiz);
        props.setCurrentQuiz(quiz);
    }

    return (
        <button onClick={onClick} value={quizName}>{quizName}</button>
    )
}

export default AutoQuizButton;