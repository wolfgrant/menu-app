import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandle() {
        navigation.navigate('MealsOverview', {
            categoryId: itemData.item.id
        });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandle}
      />
    )
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem.bind(navigation)}
      numColumns={2}
    />
  )
}
