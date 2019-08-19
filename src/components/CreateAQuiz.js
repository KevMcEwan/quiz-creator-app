import React, { Component } from 'react';
import CreateNewQuizName from './CreateNewQuizName';
import CreateNewQuizQuestion from './CreateNewQuizQuestion';

class CreateAQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizName: null,
            numberOfCorrectAnswers: 0,
            questionArray: [],
            numberOfQuestions: 0
        }
        this.handleQuizNameChange = this.handleQuizNameChange.bind(this);
        this.handleNumberOfQuestionsChange=this.handleNumberOfQuestionsChange.bind(this);
    }

    handleQuizNameChange(newQuizName){
        this.setState({ quizName: newQuizName});
    }

    handleNumberOfQuestionsChange(newNumber){
        this.setState({numberOfQuestions: newNumber});
    }

    render() {

        if (this.state.quizName === null) {
            return <CreateNewQuizName
                handleQuizNameChange={this.handleQuizNameChange}
                handleNumberOfQuestionsChange={this.handleNumberOfQuestionsChange}
            />
        } else {
            return <CreateNewQuizQuestion />
        }
    }



}

export default CreateAQuiz;