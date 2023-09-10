import { useState, useEffect } from 'react'
import personService from './services/persons'



let idGenerator = 0

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')



  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }
  useEffect(hook, [])



  let personsToShow = persons
  if (search !== "") {
    const regexp = new RegExp(search.toLowerCase());
    personsToShow = persons.filter(person => person.name.toLowerCase().search(regexp) !== -1)
  }

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearch = (event) => setSearch(event.target.value)

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // This name already exists
    if (persons.find((element) => element.name == newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = { name: newName, number: newNumber }
      personService
        .create(newPerson)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName("")
          setNewNumber("")
        })
    }
  }



  return (
    <div>

      <h2>Phonebook</h2>
      <SearchFilter
        handleSearch={handleSearch}
        search={search}
      />

      <h3>Add a new person</h3>
      <NewPersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        handleFormSubmit={handleFormSubmit}
      />

      <h3>Numbers</h3>
      <Persons
        personsToShow={personsToShow}
      />

    </div>
  )
}

const SearchFilter = ({ handleSearch, search }) => {
  return (
    <div>filter shown with
      <input onChange={handleSearch} value={search} />
    </div>
  )
}

const NewPersonForm = ({ newName, newNumber, handleNewNameChange, handleNewNumberChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>name:    <input onChange={handleNewNameChange} value={newName} />        </div>
      <div>number:  <input onChange={handleNewNumberChange} value={newNumber} />      </div>
      <div>         <button type="submit" onClick={handleFormSubmit}>add</button>   </div>
    </form>
  )
}

const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map(person =>
        <Person key={idGenerator++} name={person.name} number={person.number} />
      )}
    </ul>
  )
}

const Person = ({ name, number }) => {
  return (
    <li>{name} - {number}</li>
  )
}

export default App