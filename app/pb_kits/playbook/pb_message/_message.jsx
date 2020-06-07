/* @flow */

import React from 'react'
import classnames from 'classnames'

import { Avatar, Body, Caption } from '../'

import {
  buildAriaProps,
  buildCss,
  buildDataProps,
} from '../utilities/props'

type MessageProps = {
  aria?: object,
  avatarName?: String,
  avatarStatus?: String,
  avatarUrl?: String,
  className?: String,
  data?: object,
  id?: id,
  label?: String,
  message?: String,
  timestamp?: String,
}

const Message = ({
  aria = {},
  avatarName,
  avatarStatus = null,
  avatarUrl,
  className,
  data = {},
  id,
  label,
  message,
  timestamp,
}: MessageProps) => {
  const ariaProps = buildAriaProps(aria)
  const dataProps = buildDataProps(data)
  const shouldDisplayAvatar = avatarUrl || avatarName
  const classes = classnames(className, buildCss('pb_message_kit', { 'avatar': avatarName }))

  return (
    <div
        {...ariaProps}
        {...dataProps}
        className={classes}
        id={id}
    >
      <If condition={shouldDisplayAvatar}>
        <Avatar
            imageUrl={avatarUrl}
            name={avatarName}
            size="sm"
            status={avatarStatus}
        />
      </If>
      <div className="content_wrapper">
        <If condition={label}>
          <Caption>{label}</Caption>
        </If>
        <Body>{message}</Body>
        <If condition={timestamp}>
          <Caption size="xs">{timestamp}</Caption>
        </If>
      </div>
    </div>
  )
}

export default Message
