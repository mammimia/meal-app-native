import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealsList from '../component/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';

function Favorites() {
  const { ids: favoriteMealIds } = useSelector((state) => state.favorites);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favorite meals found.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 18, fontWeight: 'bold', color: 'white' }
});

export default Favorites;
