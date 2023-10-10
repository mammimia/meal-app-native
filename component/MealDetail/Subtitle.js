import { View, Text, StyleSheet } from 'react-native';

function Subtitle({ title }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    margingVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2
  },
  subTitle: {
    color: '#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Subtitle;
