export default function Die({ id, value, isHeld, handleHold }) {
	console.log("test", id)
	return (
		<div
			className={`die ${isHeld ? 'die-held' : 'die-notheld'}`}
			onClick={(event) => handleHold(event, id)}
		>
			<span className="die-value">{value}</span>
		</div>
	)
}