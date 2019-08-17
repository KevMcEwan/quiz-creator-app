import React from 'react';
import './App.css';
import CreateAQuiz from './components/CreateAQuiz';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import QuizContainer from './containers/QuizContainer';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/"
          render={() =>
            <HomePage />
          }
        />
        <Route path="/quiz-list"
          render={() =>
            <QuizContainer />
          }
        />
        <Route path="/create-a-quiz"
          render={() =>
            <CreateAQuiz />
          }
        />
      </Router>
    </div>
  );
}

export default App;
