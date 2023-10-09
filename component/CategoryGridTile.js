import { StyleSheet, Text, View } from 'react-native';
import Styles from '../contants/styles';
import Pressable from './ui/Pressable';

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={onPress}>
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
    ...Styles.shadow
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
