// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput} = this.state

    return (
      <div className="app-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="stop-watch-image"
          />
          <h1 className="heading">Calculate the Letters you enter</h1>
        </div>
        <label htmlFor="text" className="input-label">
          Enter the phrase
        </label>
        <input
          type="text"
          className="input-box"
          id="text"
          placeholder="Calculator"
          onChange={this.onChangeTextInput}
        />
        <p className="count-letters">No.of letters: {textInput.length}</p>
      </div>
    )
  }
}

export default LettersCalculator
