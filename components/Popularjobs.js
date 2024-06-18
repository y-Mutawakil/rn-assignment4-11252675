import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native'


const PopularJobs = ({jobName,location,salary,company,image})=>{
  return(
  <View>
  <TouchableOpacity>
  <View style={styles.container}>
   <Image source={image} style={{padding:20,height:10,width:10}}/>
  <View style={{flexDirection:'row'}}>
   <Text style={{marginBottom:5,fontWeight:'bold'}}>{jobName}</Text>
   <Text style={{left:'40%',fontWeight:'bold'}}>{salary}</Text>
   </View>
   <View style={{flexDirection:'row'}}>
   <Text style={{}}>{company}</Text>
   <Text style={{left:'40%'}}>{location}</Text>
   </View>
   
   
  </View>
 </TouchableOpacity>
 </View>

  )}

const styles = StyleSheet.create({
  container:{
    width:'110%',
    height:'100%',
    padding:'5%',
    justifyContent:'space-between',
    marginVertical:10,
    alignSelf:'center',
    borderRadius:'8%',
    backgroundColor:'white',
    margin:20

  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor:'white',
    paddingBottom: 10
  },

})

export default PopularJobs
