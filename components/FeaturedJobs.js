import React ,{useState} from 'react'
import {View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
const FeaturedJobs = ({jobName,salary,location,backgroundColor,image})=>{
  return(
  <View>
   <TouchableOpacity>  
    <View style={[styles.cardContainer,{backgroundColor}]}>
       <Text style={styles.jobName}><Image source={image} style={styles.image}/>{jobName}</Text>
       <Text>{salary} <Text style={styles.location}>{location}</Text></Text>
    </View>
  </TouchableOpacity>
</View>
  
  )
}

const styles = StyleSheet.create({
  cardContainer:{
    width:270,
    height:150,
    borderRadius:25,
    ///backgroundColor:'yellow',
    padding:20,
    margin:10,
    justifyContent:'space-between'
  },
  featuredtxt:{
    fontWeight:'bold',
    marginTop:8

  },
  jobName:{
    fontSize:20,
    justifyContent:'center'
  },
  salary:{
    
    
  },

  location:{
    left:50
  },
  image:{
    padding:13,
    height:10,
    width:10,
    backgroundColor:'white', 
    marginHorizontal:5,
    borderRadius:5
  }
  
})
export default FeaturedJobs