// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import components
import { SearchBar } from '@components/SearchBar'
import { SectionContainer } from '@components/SectionContainer'

// ------------------------------ import styles
import './style.css'

// ------- COMPONENT -------//
export const App = () => {
  const sections = ['Tableros', 'Conciliaciones', 'Fuentes', 'Usuarios']

  return (
    <div className='Container'>
      <SearchBar />
      <div className='Container__results'>
        {sections.map((section, i) => (
          <SectionContainer key={i.toString()} title={section} />
        ))}
      </div>
    </div>
  )
}
