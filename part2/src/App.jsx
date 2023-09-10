const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Example',
        exercises: 3,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

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
    <h1>{name}</h1>
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

const Total = ({sum}) => {
  return (
    <b>total of {sum} exercises</b>
  )
}

export default App