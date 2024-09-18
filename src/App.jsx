import { useState } from 'react'
import Filter from './componentes/Filter'
import PersonForm from './componentes/PersonForm'
import Numbers from './componentes/Numbers'

function App() {
  const [personas, setPersonas] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPersona = (event) => {
    event.preventDefault()
    if (personas.some(persona => persona.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personaObject = {
      name: newName,
      number: newNumber
    }

    setPersonas(personas.concat(personaObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personasToShow = filter
    ? personas.filter(persona => persona.name.toLowerCase().includes(filter.toLowerCase()))
    : personas

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange} />
        <h3>add a new</h3>
        <PersonForm
          addPerson={addPersona}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
        <h3>Numbers</h3>
        <Numbers personasToShow={personasToShow} />
      </div>
    </>
  )
}

export default App;