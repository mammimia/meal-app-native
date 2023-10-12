import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from './MealItem';

function MealsList({ items }) {
  function renderMealItem({ item }) {
    return (
      <MealItem
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        complexity={item.complexity}
        duration={item.duration}
        affordability={item.affordability}
      />
    );
  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={items}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 16 }
});

export default MealsList;
