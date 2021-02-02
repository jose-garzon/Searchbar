// ------------------------------ import libraries
import React from 'react'

// ------------------------------ import styles
import './style.css'

// ------- COMPONENT -------//
export const SectionContainer = props => {
  const { title } = props
  return (
    <section>
      <h2>{title}</h2>
    </section>
  )
}
