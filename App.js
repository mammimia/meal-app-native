import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import CategoriesScreen from './screen/CategoriesScreen';
import Favorites from './screen/Favorites';
import MealDetail from './screen/MealDetail';
import MealsOverview from './screen/MealsOverview';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351404'
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25'
        }
      }}
    >
      <Drawer.Screen
        name="meal-categories-drawer"
        component={CategoriesScreen}
        options={{
          title: 'Categories'
        }}
      />
      <Drawer.Screen
        name="favorites-drawer"
        component={Favorites}
        options={{
          title: 'Favorites'
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="meal-categories"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#351404'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#3f2f25'
            }
          }}
        >
          <Stack.Screen
            name="meal-categories"
            component={DrawerNavigator}
            options={{
              title: 'All Categories',
              headerShown: false
            }}
          />
          <Stack.Screen name="meals-overview" component={MealsOverview} />
          <Stack.Screen
            name="meal-detail"
            component={MealDetail}
            options={{
              title: 'About the Meal'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
