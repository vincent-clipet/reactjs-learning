const App = () => {

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        id: 1,
        name: "Fundamentals of React",
        exercisesNumber: 10
      },
      {
        id: 2,
        name: "Using props to pass data",
        exercisesNumber: 7
      },
      {
        id: 3,
        name: "State of a component",
        exercisesNumber: 14
      }
    ]
  }
  const exercicesCount = course.parts.reduce(function (sum, exercice) {
      return sum + exercice.exercisesNumber;
  }, 0)

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total exercicesCount={exercicesCount} />
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
  return props.parts.map(exercice => {
    return (
      <Part name={exercice.name} count={exercice.exercisesNumber} />
    )
  })
}

const Part = (exercice) => {
  return (
    <p>
      {exercice.name} {exercice.count}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercicesCount}
    </p>
  )
}



export default App