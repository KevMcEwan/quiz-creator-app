import React, { Component } from 'react';
import arrayOfNumbersCreator from '../helpers/ArrayOfNumbersCreator';

class CreateNewQuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionText: "",
            correctAnswer: "",
            numberOfAnswerFields: 1,
            answerFieldArray: [],
            wrongAnswerArray: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        event.preventDefault();
        let number = event.target.value;
        this.setState({ numberOfAnswerFields: number });
        let numberArray = arrayOfNumbersCreator(number);
        let myArray = [];
        numberArray.map((number) => {
            let id = "wrongAnswer" + number;
            let answerField = <input type="text" id={id} name={id} />
            myArray.push(answerField);
            return myArray;
        });
        this.setState({ answerFieldArray: myArray });
    };

    handleSubmit(event) {
        event.preventDefault();
        const qText = event.target.questionText.value;
        const answer = event.target.correctAnswer.value;
        this.setState({ questionText: qText });
        this.setState({ correctAnswer: answer });
        let wrongAnswerArr = [];
        this.state.answerFieldArray.map((field) => {
            let id = "wrongAnswer" + (this.state.answerFieldArray.indexOf(field) + 1);
            let string = "event.target." + id + ".value";
            let wrongAnswer = eval(string);
            wrongAnswerArr.push(wrongAnswer);
        });
        this.setState({ wrongAnswerArray: wrongAnswerArr });
    };

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <div className="createQuestion">
                    <input type="text" id="questionText" name="questionText" placeholder="Enter Question" />
                    <input type="text" id="correctAnswer" name="correctAnswer" placeholder="Enter Correct Answer" />

                    <select defaultValue="default" onChange={this.handleChange} id="numberOfWrongAnswerFields" name="numberOfWrongAnswerFields">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    {this.state.answerFieldArray}
                    <input type="submit" value="Submit" />
                </div>
            </form>

        )
    }
}

export default CreateNewQuizQuestion;

