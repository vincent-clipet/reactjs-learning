import { useState } from 'react'

const App = () => {

  let idGenerator = 0
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '0123'},
    { name: 'Azer Ty', phone: '4567' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')



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

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewPhoneChange = (event) => {
    setNewPhone(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>name:    <input onChange={handleNewNameChange} value={newName} />        </div>
        <div>number:  <input onChange={handleNewPhoneChange} value={newPhone} />      </div>
        <div>         <button type="submit" onClick={handleFormSubmit}>add</button>   </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
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