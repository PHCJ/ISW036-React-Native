import {Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function NewButton(simbolo) {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{simbolo}</Text>
    </TouchableOpacity>
  )
}