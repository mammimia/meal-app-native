import { useLayoutEffect } from 'react';
import MealsList from '../component/MealsList/MealsList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

function MealsOverview({ route: { params }, navigation }) {
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === params.categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, params.categoryId]);

  const meals = MEALS.filter((meal) =>
    meal.categoryIds.includes(params.categoryId)
  );

  return <MealsList items={meals} />;
}

export default MealsOverview;
