//modern version no need import React anymore
import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItems}>
            <Pressable 
                android_ripple={{color: '#210664'}} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;

//good practice to keep styles near their own JSX code
const styles = StyleSheet.create({
    goalItems: {
        //some styling may not work in ios
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      pressedItem: {
        opacity: 0.5,
      },
      goalText: {
        //cascading or inherit from parent in css not working in React Native
        color: 'white',
        padding: 8,
      }
});