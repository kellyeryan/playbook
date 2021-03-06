/* @flow */

import React from 'react'
import classnames from 'classnames'

import DateTime from '../pb_kit/dateTime.js'
import { buildCss } from '../utilities/props'
import { Body, Caption } from '../'

const Components = {
  body: Body,
  caption: Caption,
}

type TimeStackedProps = {
  className?: String | Array<String>,
  dark?: Boolean,
  data?: String,
  date: String,
  id?: String,
  align?: 'left' | 'center' | 'right',
  tag?: 'body' | 'caption',
}

const TimeStacked = ({
  className,
  dark = false,
  date,
  tag = 'body',
}: TimeStackedProps) => {
  const classes = classnames(className, buildCss('pb_time_stacked_kit', {
    'dark': dark,
  }))

  const tagClasses = classnames(buildCss('pb_time_stacked_kit', tag))

  const dateTimestamp = new DateTime({ value: date })

  const Tag = Components[tag]

  return (
    <div className={classes}>
      <div className="pb_time_stacked_day_month">
        <Tag
            className={tagClasses}
            color="light"
            text={dateTimestamp.toTimeWithMeridian()}
        />
        <Tag
            color="light"
            text={dateTimestamp.toTimezone()}
        />
      </div>
    </div>
  )
}

export default TimeStacked
