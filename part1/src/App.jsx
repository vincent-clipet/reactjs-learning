const App = () => {

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}



/*
  Components
*/

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return props.parts.map(part => {
    return (
      <Part name={part.name} count={part.exercises} />
    )
  })
}

const Part = (part) => {
  return (
    <p>
      {part.name} {part.count}
    </p>
  )
}

const Total = (props) => {
  const exercicesCount = props.parts.reduce(function (sum, part) {
    return sum + part.exercises;
  }, 0)

  return (
    <p>
      Number of exercises {exercicesCount}
    </p>
  )
}



export default App