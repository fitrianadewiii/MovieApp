import { StyleSheet, Text, View,Image, ImageBackground, Dimensions, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { ImagePoster } from '../../assets'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


const MoviePopular = () => {
  const navigation = useNavigation();
  const [listmovie, setListMovie] = useState(null);
  const ListMovies = () => {
      return axios
          .get('http://code.aldipee.com/api/v1/movies')
          .then(function (response) {
              const data = response.data.results;
              setListMovie(data);
              console.log("Data movies : " + JSON.stringify(data));
          });
  };

  //   Eksekusi UseEffect
  useEffect(() => {
      ListMovies();
  }, []);

  
  return (
    <View style={styles.columnimage}>
       {listmovie != null &&
          listmovie.map(item => {
            return(
            <Pressable style={styles.header} key={item.id} onPress={() => navigation.navigate('Detail',{itemId: item.id})} >
              <View style={styles.columnimage} >
                  <Image
                  style={styles.image}
                  source={{
                    uri: item.poster_path
                  }}
                  />
              </View>

              <View style={styles.columntext}  >
                  <Text style={styles.filmtitle}>{item.original_title} </Text>
                  <Text style={styles.rate}>{item.vote_average}/10 IMDb </Text>
                  <View style={styles.box}>
                      <Text style={styles.text}>MYSTERY</Text>            
                  </View>
                  <Text style={styles.rate}>1h 47m</Text>
              </View> 
            </Pressable> );
           })} 
    </View>
    )

}

export default MoviePopular
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    poster:{
        width : windowWidth*0.3,
        height: windowHeight*0.3,
        borderRadius: 100,
    },
   filmtitle:{
      Color : '#000000',      
      fontSize: 14,
      fontWeight:'700',
      margin:3
      
  },
  rate:{
    Color : '#9C9C9C',      
    fontSize: 12,
    fontWeight: '400',
    margin:3
  },
  header:{
    flexDirection:'row',
    paddingTop: 10
  },
  rows:{
    flexDirection:'column',
    marginTop: 12
  },
  image:{
    height: 110,
    width: 75,
    borderRadius:10,
  },
  columnimage:{
    flexDirection:'column'
  },
  columntext:{
    flexDirection:'column',
    marginLeft:10,
  },
  box:{
    margin:5,
    backgroundColor:'#DBE3FF',
    borderRadius:30,
    height:18,
    alignItems: 'center',
    height: 18,
    width: 61,
    padding: 1,
  },
  text:{
    color:'#88A4E8',
    fontSize:8,
    marginTop:2
  }
})