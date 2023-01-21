import './header.css';
export const Header = ({ turn, resetGame, toggleTheme, theme }) => {

	return (
		<header className={`header ${theme ? 'header-dark' : 'header-light'}`}>
			<div className="container-title">
				<button onClick={toggleTheme}> {theme ? 'Light' : 'Dark'} </button>
			</div>

			<div className="container-turn">
				<h1> <span> {turn.toUpperCase()} </span> Turn </h1>
			</div>

			<div className="container-reload-button">
				<button onClick={resetGame}> Reload</button>
			</div>
		</header >
	)
}