import React, { useState } from 'react'
import { SelectableCardIcon } from '../../'

const SelectableCardIconDark = () => {
  const [selectedIcon, setSelectedIcon] = useState(true)
  const [selectedWithoutIcon, setSelectedWithoutIcon] = useState(true)
  const [unselected, setUnselected] = useState(true)

  return (
    <div className="pb--doc-demo-row">
      <SelectableCardIcon
          bodyText="Selected, with icon"
          cardIcon
          checked={selectedIcon}
          dark
          icon="calendar"
          inputId={8}
          onChange={() => setSelectedIcon(!selectedIcon)}
          titleText="Title"
      />
      <SelectableCardIcon
          bodyText="Selected, without icon"
          checked={selectedWithoutIcon}
          dark
          icon="calendar"
          inputId={9}
          onChange={() => setSelectedWithoutIcon(!selectedWithoutIcon)}
          titleText="Title"
      />
      <SelectableCardIcon
          bodyText="Unselected"
          checked={unselected}
          dark
          icon="calendar"
          inputId={10}
          onChange={() => setUnselected(!unselected)}
          titleText="Title"
      />
      <SelectableCardIcon
          bodyText="Disabled"
          dark
          disabled
          icon="calendar"
          inputId={11}
          titleText="Title"
      />
    </div>
  )
}

export default SelectableCardIconDark
