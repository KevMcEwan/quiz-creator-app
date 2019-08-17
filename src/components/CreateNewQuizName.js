import React from 'react';


const CreateNewQuizName = (props) => {

    function handleSubmit(event){
        const newQuizName = event.quizname;
        console.log(event.text);
        props.handleQuizNameChange(newQuizName);
    }    

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="quizname" placeholder="Enter Quiz name here..."/>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CreateNewQuizName;