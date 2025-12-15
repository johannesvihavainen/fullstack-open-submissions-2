import { useEffect, useEffectEvent, useState } from 'react'
import './App.css'
import axios from 'axios'
import FilteredPersons from './components/filteredPersons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'



const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      number: newNumber,
      id: persons.length + 1
    }

    if (persons.some(person => person.name === personObject.name)) {
      alert(`${personObject.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={searchValue} handleSearchChange={(e) => setSearchValue(e.target.value)}/>
      <PersonForm newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <FilteredPersons persons={persons} searchValue={searchValue} />
    </div>
  )
}

export default App