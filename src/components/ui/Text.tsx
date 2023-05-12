import React from 'react'
import type { TextProps as RNTextProps } from 'react-native'
import { Text as ReactNativeText } from 'react-native'

export interface TextProps extends RNTextProps {
  className?: string
  text: string
  textStyle?: string
}

const Text: React.FC<TextProps> = props => {
  const { text, textStyle, ...rest } = props

  return (
    <ReactNativeText {...rest} className={textStyle} allowFontScaling={false} selectable={true}>
      {text}
    </ReactNativeText>
  )
}

export default Text
