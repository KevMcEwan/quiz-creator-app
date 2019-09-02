import React from 'react';
import Tick from '../../assets/tick.png';
import Cross from '../../assets/cross.png';


const IsAnswerCorrect = (props) => {

    const userAnswer = props.userAnswer;
    const correctAnswer = props.correctAnswer;
    // console.log("User answer is: ",userAnswer);
    // console.log("User answer type is: ", typeof userAnswer);
    // console.log("correct answer is: ", userAnswer);
    // console.log("correct answer type is: ", typeof userAnswer);


    if (props.userAnswerIsCorrect === true) {
        return (
            <img className="correctness-symbol" src={Tick} alt="correct"></img>
        )
    } else if (props.userAnswerIsCorrect === false){
        return (
            <img className="correctness-symbol" src={Cross} alt="incorrect"></img>
        )

    }
}

export default IsAnswerCorrect; 