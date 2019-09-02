import React from 'react';

const AutoQuizAnswerField = (props) => {

    function onSubmit(event){
        event.preventDefault();
        const answer = event.target.answer.value.toLowerCase();
        props.setUserAnswer(answer);
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" id="answer"/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default AutoQuizAnswerField;