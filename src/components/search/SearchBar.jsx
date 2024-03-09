import React from 'react'
import { Products } from '../assets/Products'
import { useState } from 'react'

const SearchBar = ({setEdit}) => {
    const [words, setWords] = useState('')
    const handleChange = (input) => {
        setWords(input.target.value)
        setEdit(Products.filter(item => item.name?.toLowerCase().includes(words?.toLowerCase())))
    }
  return (
    <div>
      <input type="text" className='rounded-pill w-100 p-3 border-0 box-shadow bg-body-tertiary' style={{height: 50, outline: 'none'}} placeholder='Search words...'  onChange={handleChange} />
    </div>
  )
}

export default SearchBar
