import React from 'react';
import RadioButtonAnswer from './RadioButtonAnswer';
import shuffle from '../helpers/ArrayShuffler';

const AnswerForm = (props) => {

    const fullAnswerArray = shuffle(props.fullAnswerArray);

    const answers = fullAnswerArray.map((answer) => {
        return <div className="radio-button-answer">
            <label>
                <input type="radio" value={answer} checked={false} />
                {answer}
            </label>
        </div>
    })

    return (

        <div className="answer-form">  
                {answers}
        </div>
    )
}

export default AnswerForm;