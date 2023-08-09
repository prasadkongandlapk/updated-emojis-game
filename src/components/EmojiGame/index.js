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
    hideScore: false,
  }

  onClickPlayAgain = score => {
    const {topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState(prevState => ({
      isEmojiPresent: !prevState.isEmojiPresent,
      hideScore: false,
      clickedEmojisList: [],
      score: 0,
    }))
  }

  gameResult = () => {
    const {
      score,
      topScore,
      isEmojiPresent,
      clickedEmojisList,
      emojisList,
    } = this.state
    return (
      <WinOrLoseCard
        score={score}
        topScore={topScore}
        onClickPlayAgain={this.onClickPlayAgain}
        isEmojiPresent={isEmojiPresent}
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
    const {clickedEmojisList, score} = this.state

    if (clickedEmojisList.includes(id)) {
      clickedEmojisList.pop()
      this.setState(prevState => ({
        isEmojiPresent: !prevState.isEmojiPresent,
        hideScore: true,
        clickedEmojisList: [],
      }))
    } else if (clickedEmojisList.length === 11) {
      this.setState({hideScore: true})
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
      isEmojiPresent,
      clickedEmojisList,
      hideScore,
    } = this.state

    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} hideScore={hideScore} />
        {isEmojiPresent === true || clickedEmojisList.length === 12
          ? this.gameResult()
          : this.emojis()}
      </div>
    )
  }
}

export default EmojiGame
