import React, { Component } from 'react';
import AutoQuiz from './AutoQuiz';
import Request from '../../helpers/Request';
import AutoQuizButton from './AutoQuizButton';


class AutoQuizList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuiz: null,
            quizArray: [
                "Capitals",
                "Currencies",
                "Flags"
            ],
            countriesArray: [],
        }
        this.setCurrentQuiz = this.setCurrentQuiz.bind(this);
    }

    setCurrentQuiz(quiz){
        this.setState({currentQuiz: quiz})
    }

    componentDidMount() {
        let request = new Request();
        request.get('https://restcountries.eu/rest/v2/all')
            .then((data) => {
                this.setState({ countriesArray: data })
            })
    }

    render() {

        const list = this.state.quizArray.map((quiz) => {
            return <li><AutoQuizButton
                quizName={quiz}
                setCurrentQuiz={this.setCurrentQuiz}
            />
            </li>
        })

        if (this.state.currentQuiz !== null) {
            return (
                <AutoQuiz
                    currentQuiz={this.state.currentQuiz}
                    countriesArray={this.state.countriesArray}
                />
            )
        } else {
            return (
                <ul>
                    {list}
                </ul>
            )
        }
    }
}

export default AutoQuizList;