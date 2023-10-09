import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../component/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsOverview({ route: { params } }) {
  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(params.categoryId)
  );

  function renderMealItem({ item }) {
    return (
      <MealItem
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
        data={meals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 16 }
});

export default MealsOverview;
