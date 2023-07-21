import './index.css'

const EmojiCard = props => {
  const {cardDetails, shuffledEmojisList} = props
  const {id, emojiUrl} = cardDetails

  const onClickEmogi = () => {
    shuffledEmojisList()
  }

  return (
    <li className="emoji-card">
      <button className="btn" onClick={onClickEmogi}>
        <img className="bfdc" src={emojiUrl} alt="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
