import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';

const Quiz = (props) => {
    
    debugger
        const list = props.quiz.questionArray.map((question) => {
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
                totalNumberOfQuestions={props.quiz.questionArray.length}
                numberOfCorrectAnswers={props.quiz.numberOfCorrectAnswers}
                />
            </div>
            
        )
    
}

export default Quiz;