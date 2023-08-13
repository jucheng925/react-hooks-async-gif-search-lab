import React, {useState, useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'


function GifListContainer() {
  const [threeGifs, setThreeGifs] = useState([])
  const [searchTerm, setSearchTerm] = useState("dolphin")
    useEffect(()=> {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=deI9lMBTGw3mFx6pgouMONg3kURrTwJO&rating=g&limit=3`)
        .then(r => r.json())
        .then(data => setThreeGifs(data.data))
    }, [searchTerm])

    function searchQuery(term) {
        setSearchTerm(term)
    }

  return (
    <div>
        <GifList threeGifs={threeGifs}/>
        <GifSearch searchQuery={searchQuery} />
    </div>
  )
}


export default GifListContainer