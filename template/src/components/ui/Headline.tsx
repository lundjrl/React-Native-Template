import React from 'react'

import classNames from 'classnames'

import { HeadingType } from '~/types/HeadingType'

import type { TextProps } from './Text'
import Text from './Text'

interface Props extends TextProps {
  type: HeadingType
}

export const Headline: React.FC<Props> = props => {
  const { type } = props
  switch (type) {
    case HeadingType.h1:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-h1 text-mainHeadline font-bold', props.textStyle)}
        />
      )
    case HeadingType.h2:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-h2 text-mainHeadline font-bold', props.textStyle)}
        />
      )
    case HeadingType.h3:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-h3 text-mainHeadline font-bold', props.textStyle)}
        />
      )
    case HeadingType.h4:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-h4 text-mainHeadline font-bold', props.textStyle)}
        />
      )
    case HeadingType.h5:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-h5 text-mainHeadline font-bold', props.textStyle)}
        />
      )
    case HeadingType.h6:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-h6 text-mainHeadline font-bold', props.textStyle)}
        />
      )
    case HeadingType.base:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-headlineBase text-mainHeadline font-bold', props.textStyle)}
        />
      )
    case HeadingType.small:
      return (
        <Text
          {...props}
          text={props.text}
          textStyle={classNames('text-headlineSmall text-mainHeadline font-bold', props.textStyle)}
        />
      )
    default:
      return null
  }
}
