import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal  } from 'react-native'

function GoalInput({addGoal, visible, cancel}) {
    const [goal, setGoal] = useState('')

    const submitGoal = (goal) => {
        setGoal(goal)
    }

      const addGoalHandler = () => {
          addGoal(goal)
          setGoal('')
      }

      const cancelGoal = () => {
          cancel(goal)
        setGoal('')
      }


    return (
        <Modal visible={visible} animationType="slide">
    <View style={styles.inputBox}>
        <TextInput placeholder="Enter goal..."
        style={styles.input} 
        onChangeText={submitGoal}
        value={goal}/>
        <View style={styles.btnBox}>
        <Button title="Cancel" color="red" onPress={cancelGoal} />
        <Button title="Add"
        onPress={addGoalHandler}/>
        </View>
      </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    // text input box
    inputBox: {
        flex: 1,
      justifyContent: 'center',
       alignItems: 'center'
    },
    // input field
    input: {
       width: '80%',
       marginBottom: 10, 
       borderColor: 'black', 
       borderWidth: 1,
       height: 35,
       paddingLeft: 5
    },
    btnBox : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '33%'
    }
})

export default GoalInput
