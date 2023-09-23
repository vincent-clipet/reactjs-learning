export default function Die({ id, value, isHeld, handleHold }) {
	return (
		<div
			className={`die ${isHeld ? 'die-held' : 'die-notheld'}`}
			onClick={() => handleHold(id)}
		>
			<span className="die-value">{value}</span>
		</div>
	)
}