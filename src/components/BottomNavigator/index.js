/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// eslint-disable-next-line prettier/prettier
import React from 'react';
import TabItem from '../TabItem';




const BottomNavigator = ({state, descriptors, navigation}) => {
  
  const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false){
      return null;
    }
  
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
         <TabItem
         key={index}
         label={label}
         isFocused={isFocused}
         onPress={onPress}
         onLongPress={onLongPress}
         />
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor:'white',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center'
  }
});