import { FlatList as RNFlatList } from 'react-native'

import { styled } from 'nativewind'

export const FlatList = styled(RNFlatList, {
  props: {
    contentContainerStyle: true,
  },
})

FlatList.defaultProps = {
  removeClippedSubviews: true,
  initialNumToRender: 5,
  maxToRenderPerBatch: 5,
  updateCellsBatchingPeriod: 100,
  windowSize: 10,
}
