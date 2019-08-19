import React from 'react';


const CreateNewQuizName = (props) => {

    function handleSubmit(event){
        event.preventDefault();
        const newQuizName = event.target.quizname.value;
        const newNumber = event.target.numberOfQuestions.value;
        props.handleQuizNameChange(newQuizName);
        props.handleNumberOfQuestionsChange(newNumber);
    }    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" id="quizname" name="quizname" placeholder="Enter Quiz name here..."/>
            <input type="number" id="numberOfQuestions" name="numberOfQuestions" placeholder="Enter number of questions..."/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateNewQuizName;