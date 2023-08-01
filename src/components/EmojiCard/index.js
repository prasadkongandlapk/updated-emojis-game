import './index.css'

const EmojiCard = props => {
  const {cardDetails, onClickEmojiBtn} = props
  const {id, emojiName, emojiUrl} = cardDetails

  const onClickEmoji = () => {
    onClickEmojiBtn(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="btn" onClick={onClickEmoji}>
        <img className="bfdc" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
