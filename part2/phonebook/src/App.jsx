import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    console.log(newName)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName
    }
    console.log(nameObject.name)

    setPersons(persons.concat(nameObject))
    setNewName('')
    console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div className="persons-container">
        {persons.map(person => <p>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App