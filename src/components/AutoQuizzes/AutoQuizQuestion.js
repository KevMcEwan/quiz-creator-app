import React from 'react';
import AutoQuizAnswerField from './AutoQuizAnswerField';

const AutoQuizQuestion = (props) => {

    const questionSubject = props.questionSubject;
    const countryName = props.countryName;
    const currentQuiz = props.currentQuiz;

    const flag = <img className= "country-flag" src={props.questionSubject} alt=""/>;

    

    if (currentQuiz === "Capitals" ){

    return (
        <div>
           "What is the capital city of {countryName}?"
        </div>
    )
    } else if (currentQuiz === "Currencies"){
        return (
            <div>
                "What is the currency code for {countryName}?"
        </div>
        )
    } else if (currentQuiz === "Flags"){
        console.log("Flag link is: ", props.questionSubject);
        return (
            <div>
                {flag}
                
                "What country is this the flag of?"
        </div>
        )
    }

}

export default AutoQuizQuestion;