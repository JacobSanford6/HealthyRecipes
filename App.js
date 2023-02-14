import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);



const RecipeScreen = ({navigation, route}) => {
  const [amount, setAmount] = useState(0);

  const btnClick = () =>{
    navigation.navigate({name:"Ingredients", params:{amt:amount}});
  }

  const changeText = txt =>{
    setAmount(txt)
  }
  
  return(
    <View>
      <Text style={styles.header}>Bruschetta Recipe</Text>
      <Image source={require("./assets/bruschetta.png")}></Image>
      <TextInput style={styles.textInput} placeholder='Enter the Number of Servings' onChangeText={nTxt=>setAmount(parseInt(nTxt))}></TextInput>
      <Pressable onPress={btnClick}>
        <Text style={styles.button}>View Recipe</Text>
      </Pressable>
    </View>
  );
}

const IngredientsScreen = ({navigation, route}) => {
  const amt = route.params.amt;
  console.log(amt)
  return(
    <View>
      <Text style={styles.header}>Bruschetta</Text>

      <Text style={styles.smallHeader}>Ingredients</Text>
      <Text style={styles.ingredient}>{4*amt} plum tomatoes</Text>
      <Text style={styles.ingredient}>{6*amt} basil leaves</Text>
      <Text style={styles.ingredient}>{3*amt} garlic cloves, chopped</Text>
      <Text style={styles.ingredient}>{3*amt} TB olive oil</Text>

      <Text style={styles.smallHeader}>Directions</Text>
      <Text style={styles.ingredient}>Combine the ingredients, add salt to taste. Top French bread slices with mixture</Text>

    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen name="Healthy Recipes" component={RecipeScreen} options={{ headerTintColor:"white",  headerStyle:{backgroundColor:"orangered", headerTintColor:"white"}}} />
          <Stack.Screen name="Ingredients" component={IngredientsScreen} options={{title:"", headerTintColor:"white",  headerStyle:{backgroundColor:"orangered", headerTintColor:"white"}}} />  
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header:{
    fontSize: 50,
    marginTop: '10%',
    marginBottom: '5%',
    alignSelf: 'center',
    textAlign: 'center'
  },

  textInput:{
    alignSelf: 'center',
    padding: 25,
    textAlign: 'center'
  },

  button:{
    backgroundColor: 'grey',
    color: 'white',
    padding: 10,
    alignSelf: 'center',
    textAlign: 'center',
    width: '25%',
  },

  smallHeader:{
    fontSize: 35,
    margin: 10,
  },

  ingredient:{
    fontSize: 25,
    marginLeft: 40,
  }
});
