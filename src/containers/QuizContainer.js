import React, { Component } from 'react';
import QuizList from '../components/QuizList';
import NavBar from '../components/NavBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../components/HomePage';
import CreateAQuiz from '../components/CreateAQuiz';

class QuizContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentQuiz: null,
            quizArray: [
                {
                    id: 1,
                    quizName: "Quiz 1",
                    numberOfCorrectAnswers: 0,
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
                    ]
                },
                {
                    id: 2,
                    quizName: "Quiz 2",
                    numberOfCorrectAnswers: 0,
                    questionArray: [
                        {
                            questionNumber: 1,
                            questionText: "In what year did World War 1 start?",
                            correctAnswer: "1914",
                            wrongAnswerArray: ["1913", "1915", "1912", "1918"]
                        },
                        {
                            questionNumber: 2,
                            questionText: "By what name is Ayer's Rock also known?",
                            correctAnswer: "Uluru",
                            wrongAnswerArray: ["Table Mountain", "Kilimanjaro", "The Big Rock"]
                        },
                        {
                            questionNumber: 3,
                            questionText: "What was the old name for the Snickers chocolate bar?",
                            correctAnswer: "Marathon",
                            wrongAnswerArray: ["Opal Fruits", "Fry's Peanut Bar", "Mars Nuts"]
                        },
                        {
                            questionNumber: 4,
                            questionText: "What company almost launched a CD add-on with Sony that later evolved into the Playstation?",
                            correctAnswer: "Nintendo",
                            wrongAnswerArray: ["Sega", "Microsoft", "Apple"]
                        }
                    ]
                }
            ]
        };
        this.handleCurrentQuizChange = this.handleCurrentQuizChange.bind(this);
        this.handleQuizReset = this.handleQuizReset.bind(this);
    };

    handleCurrentQuizChange(quizId) {
        let array = this.state.quizArray;
        let newQuiz = array.find(quiz => quiz.id == quizId)
        this.setState({ currentQuiz: newQuiz });
    }

    handleQuizReset() {
        this.setState({ currentQuiz: null });
    }

    render() {

        return (
            <div>
                <Router>
                    <NavBar
                        handleQuizReset={this.handleQuizReset}
                    />
                    <Route exact path="/"
                        render={() =>
                            <HomePage />
                        }
                    />
                    <Route path="/quiz-list"
                        render={() =>
                            <QuizList
                                handleCurrentQuizChange={this.handleCurrentQuizChange}
                                quizArray={this.state.quizArray}
                                currentQuiz={this.state.currentQuiz}
                            />
                        }
                    />
                    <Route path="/create-a-quiz"
                        render={() =>
                            <CreateAQuiz />
                        }
                    />
                </Router>
            </div>
        )
    }
}

export default QuizContainer;