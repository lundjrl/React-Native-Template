import React from 'react'
import type { PressableProps } from 'react-native'
import { Pressable } from 'react-native'

import classNames from 'classnames'

import Text from '../ui/Text'

import { DEFAULT_HIT_SLOP } from '~/utils/constants'

export interface ButtonProps extends PressableProps {
  onPress?: () => void
  primary?: boolean
  text: string
  textStyle?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onPress, primary = false, text, textStyle = '' }, props) => {
  const primaryButtonStyle =
    'border-buttonMain bg-buttonMain uppercase py-[10] px-[13] rounded-md shadow-sm shadow-grey500'
  const secondaryButtonStyle = 'border-buttonSecondary bg-buttonSecondary'
  const buttonStyle = classNames(primaryButtonStyle, !primary && secondaryButtonStyle)

  return (
    <Pressable
      className={buttonStyle}
      onPress={onPress}
      {...props}
      hitSlop={DEFAULT_HIT_SLOP}
      style={{ shadowOffset: { height: 2 }, shadowOpacity: 0.6 }}>
      <Text textStyle={classNames('text-white font-bold uppercase text-buttonSmall', textStyle)} text={text} />
      {children}
    </Pressable>
  )
}
