/* @flow */
import React from 'react'
import classnames from 'classnames'
import Caption from '../pb_caption/_caption.jsx'

type SectionSeparatorProps = {
  className: String,
  text: String,
  orientation?: 'horizontal' | 'vertical',
  variant?: 'card' | 'background',
  dark?: Boolean
}

const SectionSeparator = ({
  className,
  text,
  orientation = 'horizontal',
  variant = 'card',
  dark = false,
}: SectionSeparatorProps) => {
  const themeStyle = dark === true ? '_dark' : ''
  const css = classnames([
    `pb_section_separator_kit_${variant}_${orientation}` + themeStyle,
    className])

  return (
    <div className={css}>
      <span>
        <Caption text={text} />
      </span>
    </div>
  )
}

export default SectionSeparator
