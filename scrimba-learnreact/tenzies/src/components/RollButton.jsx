export default function RollButton(
	{ handleReroll, handleNewGame, tenzies }) {

	if (tenzies) {
		return (
			<button
				onClick={handleNewGame}
				className="rollButton newgame"
			>
				New Game
			</button>
		)
	}
	else {
		return (
			<button
				onClick={handleReroll}
				className="rollButton"
			>
				Roll
			</button>
		)
	}
}