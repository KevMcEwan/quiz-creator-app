import React, { Component } from 'react';
import AutoQuizQuestion from './AutoQuizQuestion';
import AutoQuizAnswerField from './AutoQuizAnswerField';


class AutoQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuiz: props.currentQuiz,
            countriesArray: props.countriesArray,
            totalNumberOfQuestions: 0,
            numberOfCorrectAnswers: 0,
        }
        this.updateNumberOfCorrectAnswers = this.updateNumberOfCorrectAnswers.bind(this);
        this.setPercentageResult = this.setPercentageResult.bind(this);
    }

    updateNumberOfCorrectAnswers(number) {
        const newNumber = this.state.numberOfCorrectAnswers + number;
        this.setState({ numberOfCorrectAnswers: newNumber })
    }

    setPercentageResult() {

    }

    render() {
        let questionList = this.state.countriesArray.map((country) => {

            if (this.state.currentQuiz === "Capitals") {

                if (country.capital !== "") {
                    return <li>
                        <AutoQuizQuestion
                            currentQuiz={this.state.currentQuiz}
                            correctAnswer={country.capital.toLowerCase()}
                            countryName={country.name}
                            updateNumberOfCorrectAnswers={this.updateNumberOfCorrectAnswers}
                        />
                    </li>
                }

            } else if (this.state.currentQuiz === "Currencies") {

                let correctAnswer = "";

                if (country.currencies[0].code === undefined) {
                    correctAnswer = country.currencies[1].code.toLowerCase();
                } else {
                    correctAnswer = country.currencies[0].code.toLowerCase();
                }
                return <li>
                    <AutoQuizQuestion
                        currentQuiz={this.state.currentQuiz}
                        correctAnswer={correctAnswer}
                        countryName={country.name}
                        updateNumberOfCorrectAnswers={this.updateNumberOfCorrectAnswers}
                    />
                </li>

            } else if (this.state.currentQuiz === "Flags") {
                return <li>
                    <AutoQuizQuestion
                        currentQuiz={this.state.currentQuiz}
                        flag={country.flag}
                        correctAnswer={country.name.toLowerCase()}
                        updateNumberOfCorrectAnswers={this.updateNumberOfCorrectAnswers}
                    />
                </li>
            }
        })

       const numOfQs = questionList.length;    

        console.log("number of Qs: ", numOfQs);

        return (
            <div>
                {this.state.currentQuiz} Quiz. This quiz has {questionList.length} questions.
            <ol>
                    {questionList}
                </ol>
            </div>
        )
    }
}

export default AutoQuiz;