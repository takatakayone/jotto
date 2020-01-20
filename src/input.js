import React, {Component} from 'react';
import { connect } from 'react-redux';

import { guessWord } from "./actions";

// class Input extends Component{
//     render() {
//         const contents = this.props.success
//             ? null
//             : (
//                 <form className="form-inline">
//                     <input
//                         data-test="input-box"
//                         className="mb-2 mx-sm-3"
//                         type="text"
//                         placeholder="enter guess"
//                         />
//                     <button
//                         data-test="submit-button"
//                         type="submit"
//                         className="btn btn-primary mb-2">
//                         Submit
//                     </button>
//                 </form>
//             );
//
//         return (
//             <div data-test="component-input">
//                 {contents}
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = ({success}) => {
//   return { success };
// };
//
// export default connect(mapStateToProps, { guessWord })(Input);



// mock用
export class UnconnectedInput extends Component{

    constructor(props) {
        super(props);

        // init state
        this.state = { currentGuess: null }

        // bindt this for
        this.submitGuessedWord = this.submitGuessedWord.bind(this);
    }
    submitGuessedWord(evt) {
        evt.preventDefault();
        const guessedWord = this.state.currentGuess;

        if (guessedWord && guessedWord.length > 0) {
          this.props.guessWord(guessedWord);
        }
    }
    render() {
        const contents = this.props.success
            ? null
            : (
                <form className="form-inline">
                    <input
                        data-test="input-box"
                        className="mb-2 mx-sm-3"
                        type="text"
                        value={this.state.currentGuess}
                        onChange={(evt) => this.setState({currentGuess: evt.target.value })}
                        placeholder="enter guess"
                    />
                    <button
                        data-test="submit-button"
                        type="submit"
                        onClick={(evt) => this.submitGuessedWord(evt)}
                        className="btn btn-primary mb-2">
                        Submit
                    </button>
                </form>
            );

        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}

const mapStateToProps = ({success}) => {
    return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
