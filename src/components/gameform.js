import React from 'react';

import './gameform.css';

export default class Gameform extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        this.props.onGuess(e.target.userGuess.value);
        e.target.userGuess.value='';
    }
   
    render() {
        const guesses = this.props.guessHistory.map((guess, index) => {
            return <li key={index}>{guess}</li>
        });
        console.log(guesses);
            return (
                <div className="game">
                    <div className="feedback">
                            <h2>
                                    {this.props.currentFeedback}
                            </h2>
                    </div>
            
                    <form className="gameform" onSubmit={this.onSubmitForm}>
                            <input 
                                type="text" 
                                name="userGuess" 
                                className="userGuess" 
                                min="1"
                                max="100" 
                                placeholder="Enter your Guess"
                                required>
                            </input>
                            <button 
                                type="submit" 
                                className="guessButton" 
                                name="submit" 
                                value="Guess">Guess
                            </button>
                    </form>
                    <p className="guessnumber">
                        Guess #
                        <span className="count">
                            {this.props.guessCount}
                        </span>
                        !
                    </p>
                    <ul className="guessbox">
                        {guesses}
                    </ul>
                </div>
            );
    }

}


