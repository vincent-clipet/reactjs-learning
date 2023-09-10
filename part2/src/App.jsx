import { useState } from 'react'

const App = () => {

  let idGenerator = 0
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '0123' },
    { name: 'Azer Ty', phone: '4567' },
    { name: 'Az Erty', phone: '8901' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')



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

  let personsToShow = persons
  if (search !== "") {
    const regexp = new RegExp(search.toLowerCase());
    personsToShow = persons.filter(person => person.name.toLowerCase().search(regexp) !== -1)
  }

  const handleNewNameChange = (event) => setNewName(event.target.value)
  const handleNewPhoneChange = (event) => setNewPhone(event.target.value)
  const handleSearch = (event) => setSearch(event.target.value)



  return (
    <div>

      <h2>Phonebook</h2>
      <div>filter shown with
        <input onChange={handleSearch} value={search} />
      </div>

      <h2>Add a new</h2>
      <form>
        <div>name:    <input onChange={handleNewNameChange} value={newName} />        </div>
        <div>number:  <input onChange={handleNewPhoneChange} value={newPhone} />      </div>
        <div>         <button type="submit" onClick={handleFormSubmit}>add</button>   </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={idGenerator++} name={person.name} phone={person.phone} />
        )}
      </ul>

    </div>
  )
}

const Person = ({ name, phone }) => {
  return (
    <li>{name} - {phone}</li>
  )
}

export default App