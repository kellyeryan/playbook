import React from 'react'
import { Time } from '../../'

const TimeDefault = () => {
  return (
    <>
      <Time
          size="lg"
          time={new Date()}
      />

      <br />

      <Time
          size="sm"
          time={new Date()}
      />

      <br />

      <Time
          size="xs"
          time="2012-08-02T15:49:29Z"
      />
    </>
  )
}

export default TimeDefault
