import { StyleSheet, Text,TouchableOpacity, View,ImageBackground,Dimensions,Image, Pressable } from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {NowShowing,MovieList,MoviePopular,HeaderDetail} from '../../components';
import { ScrollView } from 'react-native-gesture-handler'
import { ImageBanner,Imagecast1,Imagecast2,Imagecast3 } from '../../assets'
import {IconAkun,IconStar,IconBack,IconMenu2} from '../../assets';
import {useNavigation} from '@react-navigation/native';



const Detail = ({route,navigation}) => {
  
    
  const {itemId} = route.params;
  const [moviedetail, setMovieDetail] = useState(null);
   

  

  const DetailMovie = () => {
    return axios
    .get('http://code.aldipee.com/api/v1/movies/' + JSON.stringify(itemId))
        .then(function (response) {
            const data = response.data;
            setMovieDetail(data);
            console.log("Data movies detail : " + JSON.stringify(data));
        });
};

  useEffect(() => {
    DetailMovie();
}, []);
  return (
       
    <View style={styles.page} >
      {moviedetail != null && 
      <View>
          <ImageBackground source={{uri: moviedetail.backdrop_path}} style={styles.headerimage}>
          </ImageBackground>
          {/* Header   */}
          <View style={styles.rowheader} >
            <TouchableOpacity >
              <IconBack style={styles.icon}  onPress={() => navigation.navigate('Home')}/>
            </TouchableOpacity>
            <Pressable >
            <IconMenu2 style={styles.icon}/>
            </Pressable>
          </View>
       <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box} > 
            {/* Judul */}
            <View style={styles.row}>
              <Text style={styles.textjudul}>{moviedetail.original_title}</Text>
              <IconAkun/>
            </View>
            {/* Rating */}
            <View style={[styles.gap,styles.rows]}>
              <IconStar />
              <Text style={styles.text}>{moviedetail.vote_average}</Text>
            </View>
            {/* Category */}
            <View style={[styles.rows]}>
                <View style={styles.category}>
                    <Text style={styles.textcategory}>MYSTERY</Text>            
                </View>
                <View style={styles.category}>
                    <Text style={styles.textcategory}>MYSTERY</Text>            
                </View>
            </View>
            {/* Description */}
            <View style={[styles.gap,styles.rows]}>
                <View style={styles.column}>
                  <Text style={styles.textsub}>Length</Text>
                  <Text style={styles.textt}>2h 28min</Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.textsub}>Language</Text>
                  <Text style={styles.textt}>{moviedetail.original_language} </Text>
                </View>
                <View style={styles.column}>
                  <Text style={styles.textsub}>Rating</Text>
                  <Text style={styles.textt}>PG-13</Text>
                </View>
            </View>
            {/* Overview */}
            <View style={styles.gap}>
              <Text style={styles.textoverview}>
                Description
              </Text>
              <Text style={styles.overview}>
              {moviedetail.overview}
              </Text>
            </View>
            {/* cast */}
            <View style={styles.header}>
              <Text style={styles.textjudul}>Cast</Text>
              <Pressable style={styles.button}>
                <Text style={styles.textbutton}>See More</Text>
              </Pressable>
            </View>
            <View style={styles.cast}>
                <View>
                  <Image style={styles.imagecast}  source={Imagecast1}/>
                  <Text style={styles.textcast}>Tom Holland</Text>
                </View>
                <View>
                  <Image style={styles.imagecast}  source={Imagecast3}/>
                  <Text style={styles.textcast}>Zendaya</Text>
                </View>
                <View>
                  <Image style={styles.imagecast} source={Imagecast2}/>
                  <Text style={styles.textcast}>Benedict Cumberbatch</Text>
                </View>
                <View>
                  <Image style={styles.imagecast} source={Imagecast3}/>
                  <Text style={styles.textcast}>Benedict Cumberbatch</Text>
                </View>
            </View>
          </View>
          
       </ScrollView>
       </View>
      }
    </View>
  )
}

export default Detail

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rowheader:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin: 15,
    marginBottom:5,
    elevation: 7,
marginTop: -windowHeight * 0.35,
flexDirection: 'row',
color:'#fff',
fontSize:15


},
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
       height: windowHeight*2.0,
      padding: 24,

    },
    textjudul:{
        fontSize:20,
        textAlign:'left',
        fontWeight:'700',
        color:'110E47',       
    },
    textoverview:{
      fontSize:16,
      textAlign:'left',
      fontWeight:'700',
      color:'#110E47',       
   },
   overview:{
    fontSize:12,
    textAlign:'left',
    fontWeight:'400',
    color:'#9C9C9C', 
    marginTop:10      
 },
    textt:{
      fontSize:12,
      textAlign:'left',
      fontWeight:'600',
      color:'#000',   
      marginTop:5 
    },
    textsub:{
      fontSize:12,
      textAlign:'left',
      fontWeight:'400',
      color:'#9C9C9C',
         
    },
   
    header:{
      flexDirection:"row",
      // bisa column
      justifyContent: "space-between",
      marginTop:15,
    },
    row:{
        flexDirection:"row",        
        justifyContent:'space-between'
    },
    column:{
      flexDirection:"column",
      marginRight:40,        
   },
    rows:{
      flexDirection:"row", 
      alignItems:'center'       
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
    },
    category:{
      backgroundColor:'#DBE3FF',
      borderRadius:20,
      height:20,
      display:'flex',
      alignItems: 'flex-start',
      width: 61,
      flexDirection:'row',
      marginRight:10,
    },
    textcategory:{
      color:'#88A4E8',
      fontSize:10,
      marginTop:2,
      fontWeight:'400',
      marginLeft:'10%',
      alignItems:'center'
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
    button:{
      backgroundColor:'white', 
      borderColor:'grey',
      borderWidth:1,
      padding:3,
      fontSize:10,
      width:'20%',
      borderRadius:20,
      alignItems:'center',
  
    },
    cast:{
      flexDirection:'row',
      justifyContent:'space-between',
      
      marginTop: 10,
      flexWrap: 'wrap',
    },
    imagecast:{
      width:72,
      height:76,
      borderRadius:8,
    },
    textcast:{
      fontSize:12,
      fontWeight:'400',
      width:78,
    },
    icon:{
      width:15,
      height:15
    }

    
    
    

})