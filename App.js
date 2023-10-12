import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import CategoriesScreen from './screen/CategoriesScreen';
import Favorites from './screen/Favorites';
import MealDetail from './screen/MealDetail';
import MealsOverview from './screen/MealsOverview';
import store from './store/redux/store';

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
        },
        drawerContentStyle: {
          backgroundColor: '#3f2f25'
        },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen
        name="meal-categories-drawer"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          }
        }}
      />
      <Drawer.Screen
        name="favorites-drawer"
        component={Favorites}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />;
          }
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
