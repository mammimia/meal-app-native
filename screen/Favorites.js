import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../component/MealsList/MealsList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/FavoritesContext';
import { MEALS } from '../data/dummy-data';

function Favorites() {
  const { ids: favoriteMealIds } = useContext(FavoritesContext);
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
