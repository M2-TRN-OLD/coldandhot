import React from 'react';

import Gameform from './gameform';

import './coldandhot.css';

export default class ColdandHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGuess: 0,
            mostRecentGuess: 0,
            guessHistory:[],
            currentFeedback:'Take a guess',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        };
        this.restartGame = this.restartGame.bind(this);
    }

    restartGame() {
        this.setState({
            currentGuess:0,
            mostRecentGuess:0,
            guessHistory:[],
            currentFeedback:'Take a guess',
            correctAnswer: Math.floor(Math.random() * 100) + 1
        });
    }

    onGuess(guess) {
        //convert guess into an integer
        guess = parseInt(guess);
        console.log('after parsing', guess);
        
        // find the difference b etween the guess and the real answer
        const difference = Math.abs(guess - this.state.correctAnswer);
        console.log(difference);

        // determine which feedback to display
        let currentFeedback;
        if(difference >= 30) {
            currentFeedback = `You are cold.`;
        } else if (difference < 30 && difference !== this.state.correctAnswer) {
            currentFeedback = `You are hot.`;
        } else {
            currentFeedback = `You answered correctly.  Yay!`;
        }

        // set the state
        this.setState ({
            currentGuess: guess,
            mostRecentGuess: guess,
            guessHistory:[...this.state.guessHistory, guess],
            currentFeedback: currentFeedback
        });

    }

    render() {
        const { currentFeedback, currentGuess, guessHistory } = this.state;
        const guessCount = guessHistory.length;
        return (
            <div className="coldandhot">
                    <nav>
                        <ul>
                            <li><a href="#what" className="what" >What?</a></li>
                            <li><a href="#new" className="new" onClick = {this.restartGame}>+ New Game</a></li>
                        </ul>
                    </nav>
                    <div className="title">HOT or COLD</div>
                    <div>
                    <Gameform 
                        currentFeedback={currentFeedback} 
                        currentGuess={currentGuess} 
                        guessCount={guessCount}
                        guessHistory={guessHistory}
                        onGuess={(guess) => this.onGuess(guess)}
                        />  
                    </div>
            </div>
        );
    }
}