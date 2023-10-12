import { useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import List from '../component/MealDetail/List';
import Subtitle from '../component/MealDetail/Subtitle';
import IconButton from '../component/ui/IconButton';
import { MEALS } from '../data/dummy-data';
import { toggleFavorite } from '../store/redux/favoritesSlice';

function MealDetail({ route: { params }, navigation }) {
  const favoriteMealIds = useSelector((state) => state.favorites.ids);
  const dispatch = useDispatch();

  const { mealId } = params;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps
  } = meal;

  const isFavorite = favoriteMealIds.includes(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          title="Favorite"
          icon={isFavorite ? 'star' : 'star-outline'}
          onPress={() => dispatch(toggleFavorite(mealId))}
        />
      )
    });
  }, [navigation, isFavorite, toggleFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title="Ingredients" />
          <List items={ingredients} />

          <Subtitle title="Steps" />
          <List items={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
    color: 'white'
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center'
  },
  listContainer: {
    width: '80%'
  }
});

export default MealDetail;
