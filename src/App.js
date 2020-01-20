import React, {Component} from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import {connect} from "react-redux";
import Input from './input';

import { getSecretWord } from "./actions";

export class UnconnectedApp extends Component{
    componentDidMount() {
        // get the secret word
        this.props.getSecretWord();
    }

    render() {
        return (
            <div data-test="component-app" className="container">
                <h1>Jotto</h1>
                <div>The secret word is {this.props.secretWord}</div>
                <Input />
                <Congrats success={this.props.success}/>
                <GuessedWords guessedWords={this.props.guessedWords}/>
            </div>
        );
    }
}

const mapToStateToProps = (state) => {
    const {success, guessedWords, secretWord } = state;
    return {success, guessedWords, secretWord }
};

export default connect(mapToStateToProps, {getSecretWord})(UnconnectedApp);



