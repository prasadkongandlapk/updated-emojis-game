import './index.css'

const NavBar = props => {
  const {score, topScore, clickedEmojisList, hideScore} = props

  return (
    <div className="nav-card">
      <div className="logo-order">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {hideScore === true || clickedEmojisList.length === 12 ? (
        ''
      ) : (
        <div className="logo-order">
          <p className="ppp">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}
export default NavBar
