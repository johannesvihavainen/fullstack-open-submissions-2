const Filter = ({ searchValue, handleSearchChange }) => {
    return (
        <div>
            filter show with: <input value={searchValue} onChange={handleSearchChange} />
        </div>
    )
}
export default Filter