import React from 'react'
import type { PressableProps } from 'react-native'
import { Pressable } from 'react-native'

import classNames from 'classnames'

import Text from '../ui/Text'

import { DEFAULT_HIT_SLOP } from '~/utils/constants'

interface ButtonProps extends PressableProps {
  onPress?: () => void
  primary?: boolean
  text: string
  textStyle?: string
}

export const TextLink: React.FC<ButtonProps> = (
  { children, onPress, primary = false, text, textStyle = '' },
  props,
) => {
  const primaryTextLinkStyle = 'text-textLink text-buttonBase'
  const secondaryTextLinkStyle = ''
  const textLinkStyle = classNames(primaryTextLinkStyle, !primary && secondaryTextLinkStyle)

  return (
    <Pressable className={textLinkStyle} onPress={onPress} {...props} hitSlop={DEFAULT_HIT_SLOP}>
      <Text className={classNames('text-primary uppercase', textStyle)} text={text} />
      {children}
    </Pressable>
  )
}
