import './index.css'

const EmojiCard = props => {
  const {cardDetails, onClickEmojiBtn} = props
  const {id, emojiUrl} = cardDetails

  const onClickEmoji = () => {
    onClickEmojiBtn(id)
  }

  return (
    <li className="emoji-card">
      <button type="button" className="btn" onClick={onClickEmoji}>
        <img className="bfdc" src={emojiUrl} alt="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
