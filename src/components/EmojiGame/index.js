import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore} = this.state
    const {emojisList} = this.props
    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} />

        <ul className="ul">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              cardDetails={eachEmoji}
              shuffledEmojisList={this.shuffledEmojisList}
              key={eachEmoji.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
