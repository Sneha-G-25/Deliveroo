// In App.js in a new project

import  React, {useLayoutEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/app/HomeScreen'
import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

// function RootStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  },[])
  return (
    // <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
    // </NavigationContainer>
  );
}