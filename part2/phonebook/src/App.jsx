import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const getFilteredPersons = () => {
    if (!searchValue) return persons
    return persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
  }

  const filteredPersons = getFilteredPersons()

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === personObject.name)) {
      alert(`${personObject.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with: <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul className="persons-container">
        {filteredPersons ? filteredPersons.map(person => <li>{person.name} {person.number}</li>) : persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}

      </ul>
    </div>
  )
}

export default App