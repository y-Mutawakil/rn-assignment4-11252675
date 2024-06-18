import React from 'react'
import {TextInput,Image,View,StyleSheet,TouchableOpacity} from 'react-native'
import searchInput from './assets/searchbar.png'
import filter from './filter.5.png'
const SearchView=(props)=>{
   return(
  <View style={styles.container}>
    <TouchableOpacity>
    <Image source={searchInput} style={styles.searchIcon}/>
   </TouchableOpacity>
    <TextInput placeholder='search a job or Position' placeholderStyle={{textAlign:'right'}} style={styles.txtInput}/>
    <TouchableOpacity>
    <Image source={filter} style={styles.filter}/>
    </TouchableOpacity>
  </View>

   )
}
const styles= StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:50
  },
  searchIcon:{
    marginHorizontal:20,
    marginLeft:20,
    left:60
  },
 txtInput:{
   borderWidth:1,
   borderRadius:4,
   backgroundColor:'#95969D',
   width:500,
   padding:20,
   height:40,
   marginHorizontal:20

 },
 filter:{
   right:16,
   padding:20,
   backgroundColor:'#95969D',

 }
})

export default SearchView
