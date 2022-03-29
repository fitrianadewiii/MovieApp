import { StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import {IconNotif,IconMenu} from '../../assets';

const Header = () => {
  return (
    <View style={styles.rowheader}>
      <IconMenu/>
      <Text>Film Ku</Text>
      <IconNotif/>
    </View>
  )
}

export default Header
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    rowheader:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 5,
        marginBottom:5,
        elevation: 7,
    flexDirection: 'row',


    },
    
})