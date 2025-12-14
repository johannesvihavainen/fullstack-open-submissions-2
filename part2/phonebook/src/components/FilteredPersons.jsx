import Person from "./Person"

const FilteredPersons = ({ persons, searchValue }) => {

    const filteredPersons = !searchValue
        ? persons
        : persons.filter(person =>
            person.name.toLowerCase().includes(searchValue.toLowerCase())
        )

    return (
        <ul className="persons-container">
            {filteredPersons.map(person => (
                <Person key={person.id} person={person} />
            ))}
        </ul>
    )
}

export default FilteredPersons