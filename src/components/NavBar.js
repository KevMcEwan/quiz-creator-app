import React from 'react';
import {Link} from "react-router-dom";

const NavBar = (props) => {

    function handleClick(event) {
        props.handleQuizReset();
    };

    return (

        <div className="home-page">
            <Link to="/">HOME</Link>
            <Link to="/quiz-list" onClick={handleClick}>QUIZ LIST</Link>
            <Link to="/create-a-quiz">CREATE A QUIZ</Link>
        </div>
    )
}

export default NavBar;