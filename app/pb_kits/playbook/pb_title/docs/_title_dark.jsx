import React from 'react'
import { Title } from '../../'

const TitleDark = () => {
  return (
    <div>
      <Title
          dark
          size={4}
          tag="h4"
          text="Title 4"
      />
      <Title
          dark
          size={3}
          tag="h3"
          text="Title 3"
      />
      <Title
          dark
          size={2}
          tag="h2"
          text="Title 2"
      />
      <Title
          dark
          size={1}
          tag="h1"
          text="Title 1"
      />
    </div>
  )
}

export default TitleDark
