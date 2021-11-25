import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function GoalList({goalItem, onDelete}) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onDelete}>
            <View style={styles.listItem}>
           <Text>{goalItem}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalList
