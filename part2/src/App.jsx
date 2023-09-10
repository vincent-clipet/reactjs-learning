import { useState } from 'react'

const App = () => {

  let idGenerator = 0
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Azer Ty' }
  ])
  const [newName, setNewName] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const person = {
      name: newName
    }
    setPersons(persons.concat(person))
    setNewName("")
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNewNameChange} />
        </div>
        <div>debug: {newName}</div>
        <div>
          <button type="submit" onClick={handleFormSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <Person key={idGenerator++} name={person.name} />
        )}
      </ul>
    </div>
  )
}

const Person = ({ name }) => {
  return (
    <li>{name}</li>
  )
}

export default App