import { StyleSheet, Text, View,ImageBackground,Dimensions } from 'react-native'
import React from 'react'
import {NowShowing,MovieList,MoviePopular,HeaderDetail} from '../../components';
import { ScrollView } from 'react-native-gesture-handler'
import { ImageBanner } from '../../assets'


const Pesanan = () => {
  return (
    <View style={styles.page}>
          <ImageBackground source={ImageBanner} style={styles.headerimage}>
          </ImageBackground>
          <HeaderDetail />  
       <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.box}>

         </View>
       </ScrollView>
    </View>
  )
}

export default Pesanan

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'#fff'
  },
    container:{
        flex: 1,
        padding: 10,
        backgroundColor:'#FFF'
    },
   
    box:{
       marginTop: windowHeight * 0.26,
       backgroundColor:'#FFF',
       borderRadius:28,
       height: windowHeight*4.0
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
    },
    headerimage:{
      width : windowWidth,
      height: windowHeight*0.36,
    },
    heightheader:{
      elevation: 10,
      marginTop: windowHeight * 0.3,
      flexDirection: 'row',
    }

    
    
    

})