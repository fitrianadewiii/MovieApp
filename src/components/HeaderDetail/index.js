import { StyleSheet, Text, View , Dimensions,Button,Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import {IconBack,IconMenu2} from '../../assets';

const HeaderDetail = ({props}) => {

  const gotoHomePage = () => props.navigate('Home');

  return (
    <View style={styles.rowheader}>
      <TouchableOpacity onPress={gotoHomePage}>
        <IconBack/>
      </TouchableOpacity>
      <Pressable onPress={gotoHomePage}>
      <IconMenu2/>
      </Pressable>
    </View>
  )
}

export default HeaderDetail
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    rowheader:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop: 5,
        marginBottom:5,
        elevation: 7,
    marginTop: -windowHeight * 0.35,
    flexDirection: 'row',
    color:'#fff'


    },
    
})