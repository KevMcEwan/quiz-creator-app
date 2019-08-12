import React from 'react';
import './App.css';
import AnswerForm from './components/AnswerForm';
import RadioButtonAnswer from './components/RadioButtonAnswer';
import Question from './components/Question';
import Title from './components/Title';
import QuestionList from './components/QuestionList';

function App() {
  return (
    <div className="App">
      
      <QuestionList/>
    </div>
  );
}

export default App;
