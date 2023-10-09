import { FlatList, View } from 'react-native';
import CategoryGridTile from '../component/CategoryGridTile';
import { CATEGORIES as categories } from '../data/dummy-data';

function renderCategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategoriesScreen() {
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
