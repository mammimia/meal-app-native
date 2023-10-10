import { View, Text, StyleSheet } from 'react-native';

function List({ items }) {
  return items.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.listItemText}>{item}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497'
  },
  listItemText: {
    color: '#351401',
    textAlign: 'center'
  }
});

export default List;
