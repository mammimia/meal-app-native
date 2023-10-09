import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.pressable,
          pressed ? styles.pressed : null
        ]}
        onPress={onPress}
      >
        <View style={[styles.titleContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white', // Needed for ios shadow
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.select({ ios: 'visible', android: 'hidden' })
  },
  pressable: {
    flex: 1
  },
  pressed: {
    opacity: 0.5
  },
  titleContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default CategoryGridTile;
