import type { ReactNode } from 'react'
import { SafeAreaView as RNSafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import classNames from 'classnames'
import { styled } from 'nativewind'
import type { StyledFunctionComponent } from 'nativewind/dist/runtime/types/styled'

export type SafeAreaViewProps = StyledFunctionComponent<React.FC<{ children?: ReactNode }>, unknown, unknown, unknown>

const _SafeAreaView: SafeAreaViewProps = props => {
  const insets = useSafeAreaInsets()

  const viewInsets = {
    marginTop: insets.top,
    marginBottom: 0,
  }
  return (
    <RNSafeAreaView
      className={classNames('flex-1 px-4 bg-primaryUIBackground', props.className)}
      edges={['top', 'bottom']}
      style={viewInsets}
      {...props}>
      {props.children}
    </RNSafeAreaView>
  )
}

export const SafeAreaView = styled(_SafeAreaView)
