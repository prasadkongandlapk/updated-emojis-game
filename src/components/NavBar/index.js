import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="nav-card">
      <div className="logo-order">
        <img
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
        />
        <p>Emoji Game</p>
      </div>
      <div className="logo-order">
        <p className="ppp">Score: {score}</p>
        <p>TopScore: {topScore}</p>
      </div>
    </div>
  )
}
export default NavBar
