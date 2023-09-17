export default function RollButton({ handleReroll }) {
	return (
		<button onClick={handleReroll} className="rollButton">
			Roll
		</button>
	)
}