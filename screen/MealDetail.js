import { View, Text, StyleSheet } from 'react-native';

function MealDetail({ route: { params } }) {
  return (
    <View>
      <Text>MealDetail {params.mealId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default MealDetail;
