import React from 'react';


const Result = (props) => {

    const totalNumberOfQuestions = props.totalNumberOfQuestions;
    const numberOfCorrectAnswers = props.numberOfCorrectAnswers;
    const percentageResult = numberOfCorrectAnswers/totalNumberOfQuestions + "%";

    return (

        <div className="result">
            "You got {numberOfCorrectAnswers} out of {totalNumberOfQuestions} right!" {percentageResult}
        </div>
    )
}

export default Result;