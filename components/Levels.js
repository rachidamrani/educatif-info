import { StyleSheet, Text, View, Pressable } from 'react-native'

import { levels } from '../utils'

const Levels = () => {
  return (
    <View style={styles.levelSection}>
      {levels.map((level) => (
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            styles.levelPressable,
            { backgroundColor: level.color },
            pressed ? styles.pressed : null,
          ]}
          key={level.title}
        >
          <Text style={styles.levelText}>{level.title}</Text>
        </Pressable>
      ))}
    </View>
  )
}

export default Levels

const styles = StyleSheet.create({
  levelSection: {
    flexDirection: 'row',
  },
  levelText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.8,
    elevation: 0,
  },
  levelPressable: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
})
