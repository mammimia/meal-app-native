import { StyleSheet, Text, View } from 'react-native';

function MealsOverview() {
  return (
    <View style={styles.rootContainer}>
      <Text>MealsOverview</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1, padding: 16 }
});

export default MealsOverview;
