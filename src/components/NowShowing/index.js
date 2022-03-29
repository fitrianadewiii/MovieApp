/* eslint-disable prettier/prettier */
import { StyleSheet, Text, Dimensions, View, Pressable } from 'react-native'
import React from 'react'

const NowShowing = () => {
  return (
        <View style={styles.header}>
            <Text style={styles.textjudul}>NowShowing</Text>
            <Pressable style={styles.button}>
              <Text style={styles.textbutton}>See More</Text>
          </Pressable>
        </View>
  )
}

export default NowShowing

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
    container:{
        flex: 1,
       
        marginTop: 10,
    },
    box:{
        marginTop : 10,
        backgroundColor:"#fff",
        width: screen.width * 0.8,
        borderRadius:10,
        padding : 10,

        
    },
    boxcolor:{
        textAlign:'center',
        color:'#FFF',
        backgroundColor:'brown',
        fontSize:18,
        
    },
    textjudul:{
      fontSize:16,
      textAlign:'left',
      fontWeight:'700',
      color:'#110E47',       
  },
  textbutton:{
    fontSize:12,
    color:'grey',
    textAlign:'center'
    },
    bold:{
        fontWeight:'700',
        color:'black',       
    },
    input:{
      borderColor: 'brown',
      borderWidth:2,
      borderRadius:10,
      marginTop:10,
      width: 200,
      backgroundColor:"white",
      paddingLeft:15,


    },
    button:{
      backgroundColor:'white', 
      borderColor:'grey',
      borderWidth:1,
      padding:5,
      fontSize:10,
      width:'20%',
      borderRadius:20,
      alignItems:'center',
  
    },
    header:{
      flexDirection:"row",
      // bisa column
      justifyContent: "space-between",
  },
})