import React, {Component} from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import {connect} from "react-redux";

import { getSecretWord } from "./actions";


// class App extends Component{
//     render() {
//         return (
//             <div data-test="component-app" className="container">
//                 <h1>Jotto</h1>
//                 <Congrats success={true}/>
//                 <GuessedWords guessedWords={[
//                     { guessedWord: 'train', letterMatchCount: 3}
//                 ]}/>
//             </div>
//         );
//     }
// }
//
// const mapToStateToProps = (state) => {
//     const {success, guessedWords, secretWord } = state;
//     return {success, guessedWords, secretWord }
// };
//
// export default connect(mapToStateToProps, {getSecretWord})(App);


// mock用
export class UnconnectedApp extends Component{
    componentDidMount() {
        // get the secret word
        this.props.getSecretWord();
    }

    render() {
        return (
            <div data-test="component-app" className="container">
                <h1>Jotto</h1>
                <Congrats success={true}/>
                <GuessedWords guessedWords={[
                    { guessedWord: 'train', letterMatchCount: 3}
                ]}/>
            </div>
        );
    }
}

const mapToStateToProps = (state) => {
    const {success, guessedWords, secretWord } = state;
    return {success, guessedWords, secretWord }
};

export default connect(mapToStateToProps, {getSecretWord})(UnconnectedApp);
