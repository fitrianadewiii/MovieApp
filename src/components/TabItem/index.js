/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconAkun, IconAkunActive, IconHome, IconHomeActive, IconMovie, IconPesanan, IconPesananActive,IconTicket } from '../../assets'
import { WARNA_UTAMA, WARNA_DISABLE } from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label }) => {
  const Icon = () => {
      if(label === "movie") return isFocused ? <IconMovie/> : <IconMovie />

      if(label === "ticket") return isFocused ? <IconTicket/> : <IconTicket />

      if(label === "account") return isFocused ? <IconAkun/> : <IconAkun />

      return <IconHome />
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text:{
        fontSize: 13,
        color:'#FFF',
        
        marginTop: -4

    }
});