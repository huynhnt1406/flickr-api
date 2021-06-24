import React, { useState } from 'react'

function Search({handleSearch}) {

    const [term,setTerm] = useState('')

    const handleChange = (e) => {
        setTerm(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(term !== ''){
            console.log(term)
            handleSearch(term)
            setTerm('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} placeholder="search images" onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default Search
