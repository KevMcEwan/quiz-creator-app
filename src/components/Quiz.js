import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Quiz = (props) => {

    const quiz = props.quiz;
    
    const list = quiz.questionArray.map((question) => {
        const fullAnswerArray = question.wrongAnswerArray.concat(question.correctAnswer)
        return <Question
            questionText={question.questionText}
            fullAnswerArray={fullAnswerArray}
        />
    })

    return (
        <div className="quiz">
            <div className="quiz-name">
                {props.quiz.quizName}
            </div>
            {list}
            <button className="submit-button" type="submit" value="Submit">Submit</button>
            <Result
                totalNumberOfQuestions={quiz.questionArray.length}
                numberOfCorrectAnswers={quiz.numberOfCorrectAnswers}
            />
        </div>
    )
}

export default Quiz;
