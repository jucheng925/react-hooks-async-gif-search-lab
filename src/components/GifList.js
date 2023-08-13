import React from 'react'

function GifList({threeGifs}) {
  return (
    <ul>
      {threeGifs.map((gif) => {
        return (
            <li key={gif.id}>
                <img src={gif.images.original.url} alt=""/>
            </li>)
        })}
    </ul>
  )
}

export default GifList