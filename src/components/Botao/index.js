import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'

const NewButton = ({ element, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{element}</Text>
    </TouchableOpacity>
  )
}

export default NewButton