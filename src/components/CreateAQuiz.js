import React, { Component } from 'react';
import CreateNewQuizName from './CreateNewQuizName';
import CreateNewQuizQuestion from './CreateNewQuizQuestion';
import arrayOfNumbersCreator from '../helpers/ArrayOfNumbersCreator';

class CreateAQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizName: null,
            numberOfCorrectAnswers: 0,
            questionArray: [],
            numberOfQuestions: 0
        };
        this.handleQuizNameChange = this.handleQuizNameChange.bind(this);
        this.handleNumberOfQuestionsChange = this.handleNumberOfQuestionsChange.bind(this);
        this.handleQuestionArray = this.handleQuestionArray.bind(this);
    }

    handleQuizNameChange(newQuizName) {
        this.setState({ quizName: newQuizName });
    }

    handleNumberOfQuestionsChange(newNumber) {
        this.setState({ numberOfQuestions: newNumber });
    }

    handleQuestionArray(question) {
        let array = [];
        array.push(question);
        this.setState({questionArray: array});
    }

    render() {

        if (this.state.quizName === null) {
            return <CreateNewQuizName
                handleQuizNameChange={this.handleQuizNameChange}
                handleNumberOfQuestionsChange={this.handleNumberOfQuestionsChange}
            />
        } else {
            let numberArray = arrayOfNumbersCreator(this.state.numberOfQuestions);
            const qArray = [];
            numberArray.map((number) => {
                qArray.push(
                    <CreateNewQuizQuestion
                        questionNumber={number}
                        handleQuestionArray={this.handleQuestionArray}
                    />
                )
            });
            console.log("qArray: ", qArray);
            return qArray;
        }
    }



}

export default CreateAQuiz;