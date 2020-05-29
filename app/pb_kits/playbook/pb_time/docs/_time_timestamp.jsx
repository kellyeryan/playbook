import React from 'react'
import { Time } from '../../'

const TimeTimestamp = () => {
  return (
    <>
      <Time
          time="2012-08-02T15:49:29Z"
      />

      <br />

      <Time
          time={new Date()}
      />

      <br />

      <Time
          time={new Date()}
          timezone="America/Chicago"
      />
    </>
  )
}

export default TimeTimestamp
