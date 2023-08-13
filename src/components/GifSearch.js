import React, {useState} from 'react'

function GifSearch({searchQuery}) {
    const [formSearch, setFormSearch] = useState("")
    function handleChange(e) {
        setFormSearch(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        searchQuery(formSearch)
    }


  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='search'>Enter a search term: </label> <br/>
        <input type="text" name="search" onChange={handleChange} value={formSearch}/> <br/>
        <input type="submit" value="Find Gifs"/>
    </form>
      
  )
}

export default GifSearch
