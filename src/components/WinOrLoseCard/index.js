import './index.css'

const WinOrLoseCard = props => {
  const {
    isEmojiPresent,
    showResult,
    clickedEmojisList,
    emojisList,
    score,
    topScore,
    onClickPlayAgain,
  } = props
  const image =
    isEmojiPresent === true
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

  const title = clickedEmojisList.length === 12 ? 'You Won' : 'You Lose'

  const onClick = () => {
    onClickPlayAgain(score)
  }

  return (
    <div className="kdsjkfl">
      <div className="adkjl">
        <h1>{title} </h1>
        <h1 className="aldkfkla">{clickedEmojisList.length}/12</h1>
        <button type="button" onClick={onClick} className="jdfljk">
          Play again
        </button>
      </div>
      <div>
        <img className="img-result" src={image} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
