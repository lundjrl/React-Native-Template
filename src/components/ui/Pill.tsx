import classNames from 'classnames'
import { View } from 'react-native'
import Text from './Text'

interface PillProps {
  classStyle?: string
  color: string
  text: string
}

// Tailwind doesn't like dynamic/un-declared styles on the fly hence the style attr.
export const Pill: React.FC<PillProps> = ({ classStyle = '', color, text }) => (
  <View className={classNames(`rounded-md py-1 px-2`, classStyle)} style={{ backgroundColor: color }}>
    <Text text={text} textStyle="capitalize font-bold text-white" />
  </View>
)
