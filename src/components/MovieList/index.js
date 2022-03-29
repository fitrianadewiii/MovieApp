import { StyleSheet, Text, View,Image, ImageBackground, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { ImageBanner } from '../../assets'
import {IconStar} from '../../assets'
import { ScrollView } from 'react-native-gesture-handler'

const MovieList = () => {
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
  useEffect(() => {
    ListMovies();
}, []);
  return (
    <ScrollView horizontal={true}>
    <View style={styles.header}>
      {listmovie != null &&
          listmovie.map(item => {
            return(
            <View style={styles.poster}>
              <View >
                  <Image
                    style={styles.image}
                    source={ImageBanner}
                  />
              </View>
              <View style={styles.rows} >
                <Text style={styles.filmtitle}>{item.original_title}</Text>
                <Text style={styles.rate}>{item.vote_average}/10 IMDb</Text>
              </View>    
            </View>
          );
        })} 
   </View>
   </ScrollView>
  )
}

export default MovieList
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    poster:{
        width : windowWidth*1,
        height: windowHeight*0.3,
        borderRadius: 100,
    },
    image:{
      width : windowHeight*0.49,
      height: windowHeight*0.2,
      borderRadius: 8,
    },
   filmtitle:{
      Color : '#000000',      
      fontSize: 14,
      fontWeight:'700',
      
  },
  rate:{
    Color : '#9C9C9C',      
    fontSize: 12,
    fontWeight: '400',
  },
  header:{
    flexDirection:'row',
    paddingTop: 10,
    marginTop:10,
    alignContent:'center'
  },
  rows:{
    flexDirection:'column',
    marginTop: 12
  }
})