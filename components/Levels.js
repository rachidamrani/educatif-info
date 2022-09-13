import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, Pressable } from 'react-native'

import { levels } from '../utils'

const Levels = () => {
  const navigation = useNavigation()

  function navigateToLevelScreen(screenName) {
    if (screenName === 'Lycée') {
      navigation.navigate('LyceeScreen')
    } else if (screenName === 'Collège') {
      navigation.navigate('CollegeScreen')
    } else if (screenName === 'Primaire') {
      navigation.navigate('PrimaireScreen')
    }
  }

  return (
    <View style={styles.levelSection}>
      {levels.map((level) => (
        <Pressable
          onPress={() => navigateToLevelScreen(level.title)}
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
    fontFamily: 'primaryFontBold',
  },
  pressed: {
    opacity: 0.8,
    elevation: 0,
  },
  levelPressable: {
    width: 110,
    height: 50,
    margin: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
})
