import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

const clickedList = []

class EmojiGame extends Component {
  state = {
    isEmojiPresent: false,
    clickedEmojisList: clickedList,
    score: 0,
    topScore: 0,
    showResult: true,
  }

  gameResult = () => {
    const {
      isEmojiPresent,
      showResult,
      clickedEmojisList,
      emojisList,
      score,
    } = this.state
    const image =
      isEmojiPresent === true
        ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

    this.onClickPlayAgain = () => {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
        topScore: score,
        score: 0,
      }))
    }
    const title = clickedEmojisList.length === 12 ? 'You Won' : 'You Lose'
    return (
      <div className="kdsjkfl">
        <div className="adkjl">
          <h1>{title} </h1>
          <h1 className="aldkfkla">{clickedEmojisList.length}/12</h1>
          <button
            type="button"
            onClick={this.onClickPlayAgain}
            className="jdfljk"
          >
            Play again
          </button>
        </div>
        <div>
          <img className="img-result" src={image} alt="game results" />
        </div>
      </div>
    )
  }

  emojis = () => {
    const {emojisList} = this.props
    return (
      <ul className="ul">
        {emojisList.map(eachEmoji => (
          <EmojiCard
            cardDetails={eachEmoji}
            onClickEmojiBtn={this.onClickEmojiBtn}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  onClickEmojiBtn = id => {
    const {emojisList} = this.props
    const {clickedEmojisList, score} = this.state

    if (clickedEmojisList.includes(id)) {
      clickedEmojisList.pop()
      this.setState(prevState => ({
        isEmojiPresent: !prevState.isEmojiPresent,
        topScore: score,
      }))
    }
    this.setState(prevState => ({
      clickedEmojisList: [...clickedEmojisList, id],
      score: prevState.score + 1,
    }))
  }

  render() {
    const {
      score,
      topScore,
      showResult,
      isEmojiPresent,
      clickedEmojisList,
    } = this.state
    const {emojisList} = this.props

    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} />
        {(isEmojiPresent === true || clickedEmojisList.length === 12) &&
        showResult === true
          ? this.gameResult()
          : this.emojis()}
      </div>
    )
  }
}

export default EmojiGame
