import { Image, StyleSheet, Text, View } from 'react-native';
import Styles from '../../contants/styles';
import Pressable from '../ui/Pressable';
import { useNavigation } from '@react-navigation/native';

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <Pressable
        onPress={() =>
          navigation.navigate('meal-detail', {
            mealId: id
          })
        }
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'white',
    ...Styles.shadow
  },
  innerContainer: {
    borderRadius: 8
  },
  image: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
});

export default MealItem;
