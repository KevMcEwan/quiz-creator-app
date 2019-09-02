import React from 'react';
import AutoQuizQuestion from './AutoQuizQuestion';
import AutoQuizAnswerField from './AutoQuizAnswerField';

const AutoQuiz = (props) => {

    const currentQuiz = props.currentQuiz;

    const countriesArray = props.countriesArray;

    let questionList = countriesArray.map((country) => {
        if (currentQuiz === "Capitals") {
            return <li>
                <AutoQuizQuestion 
                currentQuiz={props.currentQuiz}
                questionSubject={country.capital}
                countryName={country.name}
                />
                <AutoQuizAnswerField />
                </li>
        } else if (currentQuiz === "Currencies") {
            return <li>
                <AutoQuizQuestion
                    currentQuiz={props.currentQuiz}
                    questionSubject={country.currency}
                    countryName={country.name}
                />
                <AutoQuizAnswerField />
            </li>
        } else if (currentQuiz === "Flags") {
            return <li>
                <AutoQuizQuestion
                    currentQuiz={props.currentQuiz}
                    questionSubject={country.flag}
                    countryName={country.name}
                />
                <AutoQuizAnswerField />
            </li>
        }
    })


    return (
        <div>
            "Current Quiz is" {currentQuiz}
            <ul>
                {questionList}
            </ul>
        </div>
    )
}

export default AutoQuiz