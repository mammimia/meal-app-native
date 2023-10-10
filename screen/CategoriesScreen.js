import { FlatList, View } from 'react-native';
import CategoryGridTile from '../component/CategoryGridTile';
import { CATEGORIES as categories } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate('meals-overview', { categoryId: item.id });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

export default CategoriesScreen;
