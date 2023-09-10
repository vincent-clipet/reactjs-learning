import { useState } from 'react'

let idGenerator = 0

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '0123' },
    { name: 'Azer Ty', phone: '4567' },
    { name: 'Az Erty', phone: '8901' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')





  let personsToShow = persons
  if (search !== "") {
    const regexp = new RegExp(search.toLowerCase());
    personsToShow = persons.filter(person => person.name.toLowerCase().search(regexp) !== -1)
  }

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewPhoneChange = (event) => setNewPhone(event.target.value)
  const handleSearch = (event) => setSearch(event.target.value)
  const handleFormSubmit = (event) => {
    event.preventDefault()

    // This name already exists
    if (persons.find((element) => element.name == newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = { name: newName, phone: newPhone }
      setPersons(persons.concat(newPerson))
      setNewName("")
      setNewPhone("")
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
        newPhone={newPhone}
        handleNewNameChange={handleNewNameChange}
        handleNewPhoneChange={handleNewPhoneChange}
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

const NewPersonForm = ({ newName, newPhone, handleNewNameChange, handleNewPhoneChange, handleFormSubmit }) => {
  return (
    <form>
      <div>name:    <input onChange={handleNewNameChange} value={newName} />        </div>
      <div>number:  <input onChange={handleNewPhoneChange} value={newPhone} />      </div>
      <div>         <button type="submit" onClick={handleFormSubmit}>add</button>   </div>
    </form>
  )
}

const Persons = ({ personsToShow }) => {
  return (
    <ul>
      {personsToShow.map(person =>
        <Person key={idGenerator++} name={person.name} phone={person.phone} />
      )}
    </ul>
  )
}

const Person = ({ name, phone }) => {
  return (
    <li>{name} - {phone}</li>
  )
}

export default App