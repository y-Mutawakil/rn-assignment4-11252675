import React,{useState} from 'react'
import {StyleSheet,View,TextInput,Text,Button,Image,Pressable,FlatList,ScrollView,SafeAreaView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import wave from './assets/Wave.png'
import googleIcon from './assets/google_logo.png'
import appleIcon from './assets/apple_logo.png'
import faceBookIcon from './assets/facebook_logo.png'

export default function SignUp({navigation}){
  const [name ,setName] = useState('')
  const [email,setEmail] = useState('')
  const [icons, setIcons] = useState([{key:1,icon:appleIcon},{key:2,icon:googleIcon},{key:3,icon:faceBookIcon}])
  const onPress =()=>{
     if(name && email){
      navigation.navigate('Home',{name,email})

     }
      
     
  }
return(

<ScrollView contentContainerStyle={{flex:1,alignContent:'center',alignItems:'center',justifyContent:'center'}} showsVerticalScrollIndicator={true}>

  <View style={styles.container}>
   <Text style={styles.signuptxt}>Jobbiz</Text>
   <View style={styles.container2}>
   <Text style={styles.welcome}> Welcome Back <Image source={wave} style={styles.wave}/></Text>
   <Text style={{marginBottom:30}}>Let's log in. Apply to jobs.</Text>
   </View>
   <View style={styles.container2}>
    
    <TextInput placeholder='name' style={styles.txtInput} value={name}  onChangeText={(val)=>setName(val)} />
   </View>
   <View style={styles.container2}>
    
    <TextInput placeholder ='Email' style={styles.txtInput} value={email} 
    onChangeText={(val)=>{setEmail(val)}} />
  </View>
  <View style={{margin:7,alignItems:'center'}}>
    <Pressable style={styles.opacity} onPress={onPress}>
       <Text style={{color:'white',marginVertical:2,marginHorizontal:70,fontSize:15}}>Login
       </Text>
    </Pressable>
    <Text style={{margin:30,alignItems:'center'}}> Or continue with</Text>
    <FlatList data={icons} renderItem={({item})=>{
        return(
          <Pressable>
          <Image source={item.icon} style={styles.icons} />
          </Pressable>
        )
      }} horizontal/>
  </View> 
  <View> 
    <Text style={{margin:3}}> Have no account? <Text style={{color:'blue'}}>Register</Text></Text>
    
  </View>
 </View>

</ScrollView>




)


}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems :'center',
    justifyContent:'center'
  },
  container2:{
    flex:2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:10
  },
signuptxt:{
  fontSize: 20,
  fontWeight:'bold',
  color :'blue',
  margin:1
},
txtInput:{
  borderWidth:1,
  borderRadius:2,
  padding:12,
  width:'92%'

},
welcome:{
  fontSize:15,
  fontWeight:'bold',
  marginBottom:3
},
wave:{
  padding:10,
  height:20,
  width:20,
  marginTop:20,
  top:5

},
opacity:{
  width:180,
 height:28,
 
  backgroundColor:'#356899'


},
icons:{
  height:20,
  padding:15,
  width:10,
  marginHorizontal:12
},
scrollview:{

    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
}

})