import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    isEmojiPresent: false,
    clickedEmojisList: [],
    score: 0,
    topScore: 0,
    showResult: true,
    hideScore: false,
  }

  onClickPlayAgain = score => {
    const {topScore} = this.state
    if (score > topScore) {
      this.setState(prevState => ({
        showResult: !prevState.showResult,
        topScore: score - 1,
        hideScore: !prevState.hideScore,
        score: 0,
      }))
    }
  }

  gameResult = () => {
    const {
      score,
      topScore,
      isEmojiPresent,
      showResult,
      clickedEmojisList,
      emojisList,
    } = this.state
    return (
      <WinOrLoseCard
        score={score}
        topScore={topScore}
        onClickPlayAgain={this.onClickPlayAgain}
        isEmojiPresent={isEmojiPresent}
        showResult={showResult}
        clickedEmojisList={clickedEmojisList}
        emojisList={emojisList}
      />
    )
  }

  emojis = () => {
    const {emojisList} = this.props
    const shuffled = emojisList.sort(() => Math.random() - 0.5)

    return (
      <ul className="ul">
        {shuffled.map(eachEmoji => (
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
        hideScore: !prevState.hideScore,
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
      hideScore,
    } = this.state
    const {emojisList} = this.props

    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} hideScore={hideScore} />
        {(isEmojiPresent === true || clickedEmojisList.length === 12) &&
        showResult === true
          ? this.gameResult()
          : this.emojis()}
      </div>
    )
  }
}

export default EmojiGame
