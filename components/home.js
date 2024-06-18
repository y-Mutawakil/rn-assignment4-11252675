import React from 'react'
import {StyleSheet,View,Text,Image,FlatList,ScrollView,TouchableOpacity} from 'react-native'
import Ellipse from './assets/Ellipse.png'
import SearchView from './components/Search'
import FeaturedJobs  from './components/FeaturedJobs'
import PopularJobs from './components/Popularjobs'
import Img1 from './assets/Img1.png'
import Img2 from './assets/Img2.png'
import Img3 from './assets/Img3.png'
import Img4 from './assets/Img4.png'
import Img5 from './assets/snack-icon.png'
import Img6 from './assets/facebook_logo.png'
import Img7 from './assets/google_logo.png'

export default function Home({route}){
  const {name,email} =route.params
  const jobDetails = [{key:1,jobName:'Sales Executive',salary:'$150,000',location:'East Legon, Accra',backgroundColor:'#1a73e8',image:Img1},{key:2, jobName:'Project Manager',salary:'$400,000', location:'Dzorwolu, Accra',backgroundColor:'#c2185b',image:Img2},{key:3, jobName:'Accountant',salary:'$ 200,000',location:'West-Hills,Accra',backgroundColor:'#00796b',image:Img3},
{key:4,jobName:'Real-Estate Developer',salary:'$500,000',location:'Amasaman, Accra',backgroundColor:'#5d4037',image:Img4},
{key:5, jobName:'Private Tutor',salary:'$11,000',location:'Haatso, Accra',backgroundColor:'#7b1fa2',image:Img5},
{key:6,jobName:'Mobile Application Developer',salary:'$100,000',location:'Remote',backgroundColor:'#303f9f',image:Img6},
{key:7,jobName:'AI Expert',salary:'$200,000',location:'East-Legon, Accra',backgroundColor:'#0288d1',image:Img7 },
{key:8, jobName:'System Administrator',salary:'$100,000', location:'Tema, Ghana',backgroundColor:'yellow',image:Img2}]


const popularJobs = [{key:1,jobName:'Sales Executive',salary:'$150,000',location:'East Legon, Accra',backgroundColor:'#1a73e8',company:'Adepa Stores',image:Img1},{key:2, jobName:'Project Manager',salary:'$400,000', location:'Dzorwolu, Accra',backgroundColor:'#c2185b',company:'Prime Time',image:Img2},{key:3, jobName:'Accountant',salary:'$ 200,000',location:'West-Hills,Accra',backgroundColor:'#00796b',company:'West-hills Mall',image:Img3},
{key:4,jobName:'SoftWare Engineer',salary:'$500,000',location:'Amasaman, Accra',backgroundColor:'#5d4037',company:'Google',image:Img4},
{key:5, jobName:'Private Tutor',salary:'$11,000',location:'Haatso, Accra',backgroundColor:'#7b1fa2',company:'Alpha Schools',image:Img5},
{key:6,jobName:'Mobile Application Developer',salary:'$100,000',location:'Remote',backgroundColor:'#303f9f',company:'CityLives',image:Img6},
{key:7,jobName:'AI Expert',salary:'$200,000',location:'East-Legon, Accra',backgroundColor:'#0288d1',company:'Tech Experts',image:Img7 },
{key:8, jobName:'System Administrator',salary:'$100,000', location:'Tema, Ghana',backgroundColor:'yellow',company:'MacDevop',image:Img2}]


  
  return(
<ScrollView>
 <View style={styles.container}>
   <View style={{}}>
     <Text style={styles.text1}>{name}
      
     </Text>
     <Text style={styles.text2}>{email} </Text>
      <Image source={Ellipse} style={styles.image1} />
        
   </View>
  
     <SearchView/>
     <View style={{flexDirection:'row',margin:10}}>
     <Text style={{fontWeight:'bold'}}>Featured Jobs </Text>
    <TouchableOpacity> <Text style={{left:90}}>See all</Text></TouchableOpacity>
    </View>
  
  <FlatList data={jobDetails} showsHorizontalScrollIndicator={false} renderItem={({item})=>{
       return(

       <FeaturedJobs image={item.image} jobName={item.jobName} salary={item.salary} location={item.location} backgroundColor={item.backgroundColor}/>
       )
     }

     } horizontal/>
     <View style={{flexDirection:'row',margin:10}}>
      <Text style={{fontWeight:'bold',}}>Popular Jobs</Text>
     <TouchableOpacity> <Text style={{left:90}}>See all</Text></TouchableOpacity>
    </View>
  
  <FlatList data={popularJobs} renderItem={({item})=>{
        return(
          <View style={{margin:15}}>
        
          <PopularJobs image={item.image} jobName={item.jobName} salary={item.salary} location={item.location} company={item.company} vertical/>
        
       </View> )}}/>
      
    
     
     
 
   
   
   
 </View>
</ScrollView>



  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'row'
    
  },
  text1:{
    fontWeight:'bold',
    fontSize:25,
    marginLeft:8,
   
  },
  text2:{
    marginLeft:8,
    
  },
 image1:{
   
   width:54,
   left:280,
   height:54,
   bottom:35, 
   marginBottom:0,
   position:'absoulte'
   
   
 }
})