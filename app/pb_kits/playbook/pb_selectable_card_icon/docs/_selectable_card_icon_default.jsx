import React, { useState } from 'react'
import { SelectableCardIcon } from '../../'

const SelectableCardIconDefault = () => {
  const [selectedDefault, setSelectedDefault] = useState(true)

  return (
    <div>
      <SelectableCardIcon
          checked={selectedDefault}
          className=""
          icon="calendar"
          onChange={() => setSelectedDefault(!selectedDefault)}
          text="Some text that might explain"
          title="Title"
      />
    </div>
  )
}

export default SelectableCardIconDefault
