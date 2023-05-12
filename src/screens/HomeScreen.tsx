import React from 'react'
import { View } from 'react-native'

import Fade from '../components/animations/Fade'

import { Headline } from '~/components/ui/Headline'
import { SafeAreaView } from '~/components/ui/SafeAreaView'
import { HeadingType } from '~/types/HeadingType'

export const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <Fade open={true}>
        <View className="flex flex-col items-start justify-between h-full mb-0">
          <Headline text="My React Native App" type={HeadingType.h1} textStyle="py-8" />
        </View>
      </Fade>
    </SafeAreaView>
  )
}
