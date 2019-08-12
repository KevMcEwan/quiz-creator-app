import React, { Component } from 'react';
import Question from './Question';
import Result from './Result';


class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizName: "General Knowledge Test",
            questionArray: [
                {
                    questionNumber: 1,
                    questionText: "What is the capital city of Scotland?",
                    correctAnswer: "Edinburgh",
                    wrongAnswerArray: ["Glasgow", "Dundee", "Aberdeen"]
                },
                {
                    questionNumber: 2,
                    questionText: "Which team won the European Cup in 1967?",
                    correctAnswer: "Celtic",
                    wrongAnswerArray: ["Man Utd", "Benfica", "Real Madrid"]
                },
                {
                    questionNumber: 3,
                    questionText: "Who was the first man on the moon?",
                    correctAnswer: "Neil Armstrong",
                    wrongAnswerArray: ["Yuri Gagarin", "Buzz Aldrin", "Flash Gordon"]
                }
            ],
            numberOfCorrectAnswers: 0,
        }
    }

    render() {

        const list = this.state.questionArray.map((question) => {
            const fullAnswerArray = question.wrongAnswerArray.concat(question.correctAnswer)
            return <Question
                questionText={question.questionText}
                fullAnswerArray={fullAnswerArray}
            />
        })

        return (
            <div className="question-list">
                <div className="quiz-name">
                    {this.state.quizName}
                </div>
                {list}
                <button className="submit-button" type="submit" value="Submit">Submit</button>
                <Result 
                totalNumberOfQuestions={this.state.questionArray.length}
                numberOfCorrectAnswers={this.state.numberOfCorrectAnswers}
                />
            </div>
            
        )
    }
}

export default QuestionList;