const Course = ({ course }) => {
	let sum = course.parts.map(part => part.exercises).reduce((acc, i) => acc + i, 0)

	return (
		<>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<Total sum={sum} />
		</>
	)
}

const Header = ({ name }) => {
	return (
		<h2>{name}</h2>
	)
}

const Content = ({ parts }) => {
	return (
		<div>
			{parts.map(part =>
				<Part key={part.id} name={part.name} exercises={part.exercises} />
			)}
		</div>
	)
}

const Part = ({ name, exercises }) => {
	return (
		<p>{name} {exercises}</p>
	)
}

const Total = ({ sum }) => {
	return (
		<b>total of {sum} exercises</b>
	)
}

export default Course