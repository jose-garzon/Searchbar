// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles
import './style.css'

// ------- COMPONENT -------//
export const SearchBar = () => {
  return (
    <>
      <label className='SearchBar'>
        <input className='SearchBar__input' id='search' required type='text' />
        <span className='SearchBar__label' htmlFor='search'>
          <strong>Search</strong>
        </span>
      </label>
    </>
  )
}
