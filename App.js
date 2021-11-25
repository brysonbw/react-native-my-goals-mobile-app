import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goalsList, setGoalsList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

 const addGoal = addedGoal => {
  setGoalsList(currentGoals => [
    ...currentGoals,
  { id: Math.random().toString(), value: addedGoal}])
  setIsAddMode(false)
  }

  const cancel = () => {
    setIsAddMode(false)
  }

  const deleteGoal = goalId => {
    setGoalsList(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId )
    })
  }


  return (
    <View style={styles.screen}>
      <View style={styles.btnBox}>
    <Text style={styles.titleText}>My Goals</Text>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      </View>
      <GoalInput visible={isAddMode} addGoal={addGoal} cancel={cancel} />
      <FlatList
      keyExtractor={(item) => item.id}
      data={goalsList}
      renderItem={itemData => <GoalList  onDelete={deleteGoal.bind(this, itemData.item.id)} goalItem={itemData.item.value}/>}
      />
    </View>

    
  );
}

// stylesheet object
const styles = StyleSheet.create({
  // entire screen
  screen: {
    padding: 50
  },
  btnBox : {
     marginTop: 15
},
  titleText : {
 textAlign: 'center',
 fontWeight: '400',
 fontSize: 30,
 marginBottom: 10
}
});
