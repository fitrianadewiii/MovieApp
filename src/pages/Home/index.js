/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text,Button, View, Dimensions,Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {NowShowing,MovieList,MoviePopular,Header} from '../../components';

const Home = ({ navigation }) => {
 
    return ( 
      <>
      
      <View style={styles.container}>
        <Header/>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.gap}>
          <NowShowing/>
          <MovieList/>          
          <View style={styles.header}>
            <Text style={styles.textjudul}>Popular Movie</Text>
              <Pressable style={styles.button} >
                <Text style={styles.textbutton}>See More</Text>
            </Pressable>
          </View>
          <MoviePopular/>
          </View>
       
          </ScrollView>
          
      </View>
      </>
    )
}

export default Home

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor:'#FFF'
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
        fontWeight:'600',
        color:'#110E47',       
    },
    textbutton:{
      fontSize:12,
      color:'grey',
      textAlign:'center'
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
      marginTop:15,
  },
  row:{
    flexDirection:"row",
    marginTop:10,
    marginBottom:10,
  },
  gap:{
    marginTop:10,
    marginBottom:10
  }
   
    
    

})