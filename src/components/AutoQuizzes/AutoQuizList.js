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

    setCurrentQuiz(quiz) {
        this.setState({ currentQuiz: quiz })
    }

    componentDidMount() {
        let request = new Request();
        request.get('https://restcountries.eu/rest/v2/all?fields=name;capital;currencies;flag')
            .then((data) => {
                const arrayOfCountriesToExclude = ["Åland Islands", "American Samoa", "Anguilla", "Antarctica", "Bermuda", "Bonaire, Sint Eustatius and Saba", "Bouvet Island", "British Indian Ocean Territory", "United States Minor Outlying Islands", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Christmas Island", "Cocos (Keeling) Islands", "Curaçao", "Falkland Islands (Malvinas)", "French Polynesia", "Gibraltar", "Greenland", "Guadeloupe", "Guam", "Guernsey", "Heard Island and McDonald Islands", "Hong Kong", "Isle of Man", "Jersey", "Macao", "Martinique", "Mayotte", "Montserrat", "New Caledonia", "Norfolk Island", "Northern Mariana Islands", "Pitcairn", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Sint Maarten (Dutch part)", "South Georgia and the South Sandwich Islands", "Svalbard and Jan Mayen", "Tokelau", "Turks and Caicos Islands", "Wallis and Futuna", "Western Sahara"];
                const filteredData = data.filter((country) => {
                    if (arrayOfCountriesToExclude.includes(country.name)) {

                    } else {
                        return country;
                    }
                });

                this.setState({ countriesArray: filteredData });
                console.log("filteredData: ", filteredData)
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