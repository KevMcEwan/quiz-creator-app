import React, { Component } from 'react';
import CreateNewQuizName from './CreateNewQuizName';
import CreateNewQuizQuestion from './CreateNewQuizQuestion';

class CreateAQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quizName: null,
            numberOfCorrectAnswers: 0,
            questionArray: []
        }
        this.handleQuizNameChange = this.handleQuizNameChange.bind(this);
    }

    handleQuizNameChange(newQuizName){
        this.setState({ quizName: newQuizName});
    }

    render() {

        if (this.state.quizName === null) {
            return <CreateNewQuizName
                handleQuizNameChange={this.handleQuizNameChange}
            />
        } else {
            return <CreateNewQuizQuestion />
        }
    }



}

export default CreateAQuiz;