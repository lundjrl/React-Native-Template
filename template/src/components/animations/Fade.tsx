import React, { useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

/*
    Fade is a custom animation component that shows/hides the child
    props when our open prop is toggled. This tool is to be used as
    an elegant loading UI for Firestore calls and other data loading
    techniques.
*/
const Fade: React.FC<{ children: ReactNode; open: boolean; override?: boolean }> = ({ children, open, override }) => {
  const opacity = useMemo(() => new Animated.Value(0), [])

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }

    const fadeOut = () => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }

    open ? fadeIn() : fadeOut()
  }, [opacity, open])

  return (
    <View style={override ? styles.none : styles.main}>
      <Animated.View
        style={[
          styles.secondary,
          {
            opacity,
          },
        ]}>
        {children}
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: { flex: 1 },
  none: {},
  secondary: {},
})

export default Fade
