import React, { Component } from 'react';
import AnswerForm from './AnswerForm';


const Question = (props) => {
    
    const questionText = props.questionText;
    const fullAnswerArray = props.fullAnswerArray;
    

        return (
            <div className="question">
                <div className="question-text">
                    {questionText}
                </div>
                <form>
                    <AnswerForm
                        fullAnswerArray={props.fullAnswerArray}
                    /> 
                    
                </form>
            </div>

        )
    }


export default Question;