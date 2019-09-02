import React, { Component } from 'react';
import AutoQuizAnswerField from './AutoQuizAnswerField';
import IsAnswerCorrect from './IsAnswerCorrect';

class AutoQuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            correctAnswer: props.correctAnswer,
            countryName: props.countryName,
            currentQuiz: props.currentQuiz,
            userAnswer: "",
            flag: props.flag,
            userAnswerIsCorrect: false
        }
        this.setUserAnswer = this.setUserAnswer.bind(this);
    }

    updateNumberOfCorrectAnswers(number) {
        this.props.updateNumberOfCorrectAnswers(number);
    }

    setUserAnswer(answer) {
        if (this.state.correctAnswer === answer) {
            let number = 1;
            this.setState({userAnswerIsCorrect: true});
            this.updateNumberOfCorrectAnswers(number)
        } else if (this.state.correctAnswer !== answer) {
            let number = -1;
            this.setState({ userAnswerIsCorrect: false })
            this.updateNumberOfCorrectAnswers(number);
        }
        this.setState({ userAnswer: answer });
    };

    render() {

        if (this.state.currentQuiz === "Capitals") {

            return (
                <div>
                    "What is the capital city of {this.state.countryName}?"
                <AutoQuizAnswerField
                        setUserAnswer={this.setUserAnswer}
                    />
                    <IsAnswerCorrect
                        userAnswerIsCorrect={this.state.userAnswerIsCorrect}
                    />
                </div>
            )
        } else if (this.state.currentQuiz === "Currencies") {
            return (
                <div>
                    "What is the currency code for {this.state.countryName}?"
                <AutoQuizAnswerField
                        setUserAnswer={this.setUserAnswer}
                    />
                    <IsAnswerCorrect
                        userAnswerIsCorrect={this.state.userAnswerIsCorrect}
                    />
                </div>
            )
        } else if (this.state.currentQuiz === "Flags") {
            return (
                <div>
                    <img className="country-flag" src={this.state.flag} alt="" />

                    "What country is this the flag of?"
                     <AutoQuizAnswerField
                        setUserAnswer={this.setUserAnswer}
                    />
                    <IsAnswerCorrect
                        userAnswerIsCorrect={this.state.userAnswerIsCorrect}
                    />
                </div>
            )
        }
    }
}


export default AutoQuizQuestion;